<template>
  <div id="top">
    <el-input
      v-model="state.input"
      placeholder="输入文字后点击地图方可添加文字标注"
      clearable
    />
  </div>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { onMounted, reactive } from "vue";
  import { Map, View, Feature } from "ol";
  import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
  import { defaults, FullScreen } from "ol/control";
  import { XYZ, Vector as VectorSource } from "ol/source";
  import { Point } from "ol/geom";
  import { ATTRIBUTIONS, SHENZHEN, MAPURL } from "@/constants";
  import { ElMessage } from "element-plus";
  import { createLabelStyle, addVectorLabel } from "./tools";
  import updateMapSize from "@/hooks/updateMapSize";

  const state = reactive({
    input: "",
    map: null,
    vectorSource: null,
  });
  const raster = new TileLayer({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url: MAPURL,
      maxZoom: 20,
    }),
  });
  const initMap = () => {
    state.map = new Map({
      //初始化map
      target: "map",
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        raster,
      ],
      view: new View({
        projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
        center: SHENZHEN, // 深圳坐标
        //地图初始显示级别
        zoom: 5,
      }),
      //加载控件到地图容器中
      controls: defaults().extend([
        new FullScreen(), //加载全屏显示控件（目前支持非IE内核浏览器）
      ]),
    });
    // 侧边栏变化更新地图
    updateMapSize(state.map);
    //实例化Vector要素，通过矢量图层添加到地图容器中
    const iconFeature = new Feature({
      geometry: new Point(SHENZHEN),
      //名称属性
      name: "深圳市",
    });
    iconFeature.setStyle(createLabelStyle(iconFeature));
    //矢量标注的数据源
    state.vectorSource = new VectorSource({
      features: [iconFeature],
    });
    //矢量标注图层
    const vectorLayer = new VectorLayer({
      source: state.vectorSource,
    });
    state.map.addLayer(vectorLayer);
  };

  onMounted(() => {
    initMap();
    state.map.on("click", (evt) => {
      if (!state.input) {
        ElMessage({
          message: "请先添加标注名",
          type: "warning",
        });
        return;
      }
      //鼠标单击点坐标
      const coordinate = evt.coordinate;
      //添加一个新的标注（矢量要素）
      addVectorLabel({
        coordinate,
        vectorSource: state.vectorSource,
        name: state.input,
      });
    });
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  #top {
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
  .el-input {
    width: 600px;
  }
  .mobile #top {
    font-size: 12px;
  }
  .mobile .el-input {
    width: 300px;
  }
</style>
