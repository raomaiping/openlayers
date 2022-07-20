<template>
  <div class="top">
    <div id="mouse-position"></div>
  </div>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { onMounted } from "vue";
  import { Map, View } from "ol";
  import { MousePosition, defaults } from "ol/control";
  import { createStringXY } from "ol/coordinate";
  import { Tile as TileLayer } from "ol/layer";
  import { XYZ } from "ol/source";
  import { MAPURL, ATTRIBUTIONS } from "@/constants";
  import updateMapSize from "@/hooks/updateMapSize";
  const raster = new TileLayer({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url: MAPURL,
      maxZoom: 20,
    }),
  });
  //实例化鼠标位置控件（MousePosition）
  const mousePositionControl = (id) =>
    new MousePosition({
      //坐标格式
      coordinateFormat: createStringXY(4),
      //地图投影坐标系（若未设置则输出为默认投影坐标系下的坐标）
      projection: "EPSG:4326",
      //坐标信息显示样式类名，默认是'ol-mouse-position'
      className: "custom-mouse-position",
      //显示鼠标位置信息的目标容器
      target: document.getElementById(id),
      //未定义坐标的标记
      undefinedHTML: "&nbsp;",
    });
  const initMap = (mousePositionControl) => {
    const map = new Map({
      //初始化map
      target: "map",
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        raster,
      ],
      view: new View({
        projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
        center: [0, 0], // 深圳坐标
        //地图初始显示级别
        zoom: 5,
      }),
      //加载控件到地图容器中
      controls: defaults({
        //地图中默认控件
        /* @type {ol.control.Attribution} */
        attributionOptions: {
          //地图数据源信息控件是否可收缩,默认为true
          collapsible: true,
        },
      }).extend([mousePositionControl]), //加载鼠标位置控件
    });
    // 侧边栏变化更新地图
    updateMapSize(map);
  };
  onMounted(() => {
    initMap(mousePositionControl("mouse-position"));
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
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  #mouse-position {
    width: 200px;
    height: 20px;
  }
  .mobile #map {
    top: 0;
  }
  .mobile #mouse-position {
    position: absolute;
    left: 10px;
    top: 100px;
    z-index: 1;
    color: #fff;
  }
</style>
