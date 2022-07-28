<template>
  <div class="top">
    <img
      v-for="(item, index) in imageList"
      :key="index"
      :src="item"
      draggable="true"
      @dragstart="handleDragStart"
    />
  </div>
  <div id="map" @drop="handleDrop" @dragover="handleDragover"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { onMounted } from "vue";
  import { Map, View } from "ol";
  import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
  import { defaults, FullScreen } from "ol/control";
  import { XYZ, Vector as VectorSource } from "ol/source";
  import { MAPURL, ATTRIBUTIONS } from "@/constants";
  import { defaults as defaultInteractions } from "ol/interaction";
  import updateMapSize from "@/hooks/updateMapSize";
  import { addVectorLabel } from "./tools";
  import Drag from "./Drag";
  let map;
  const imageList = [
    require("@/assets/chips.png"),
    require("@/assets/ice_cream.png"),
  ];
  const raster = new TileLayer({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url: MAPURL,
      maxZoom: 20,
    }),
  });
  //矢量标注的数据源
  const vectorSource = new VectorSource();
  //矢量标注图层
  const vectorLayer = new VectorLayer({
    source: vectorSource,
  });
  const initMap = () => {
    map = new Map({
      //初始化map
      target: "map",
      //地图容器中加载的图层
      interactions: defaultInteractions().extend([new Drag()]),
      layers: [
        //加载瓦片图层数据
        raster,
        vectorLayer,
      ],
      view: new View({
        projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
        center: [0, 0], // 深圳坐标
        //地图初始显示级别
        zoom: 5,
      }),
      //加载控件到地图容器中
      controls: defaults().extend([
        new FullScreen(), //加载全屏显示控件（目前支持非IE内核浏览器）
      ]),
    });
    // 侧边栏变化更新地图
    updateMapSize(map);
  };
  const handleDragStart = (event) => {
    const src = event.target.src;
    event.dataTransfer.setData("src", src);
  };
  const handleDragover = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    const imageUrl = event.dataTransfer.getData("src");
    const { offsetX, offsetY } = event;
    const coordinate = map.getCoordinateFromPixel([offsetX, offsetY]);
    addVectorLabel({
      coordinate,
      vectorSource,
      imageUrl,
    });
    event.stopPropagation();
    console.log(imageUrl, event, coordinate);
  };

  onMounted(() => {
    initMap();
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    height: calc(100% - 50px);
  }
  .top {
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  img {
    width: 20px;
    cursor: pointer;
    margin: 0 20px;
  }
</style>
