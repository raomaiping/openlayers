<template>
  <el-empty description="请在pc端查看" v-if="isMobile()" />
  <div id="map" v-if="!isMobile()"></div>
  <toolBar @handleUpdate="handleUpdate" v-if="!isMobile()" />
</template>

<script setup>
  import "ol/ol.css";
  import { onMounted } from "vue";
  import { Map, View } from "ol";
  import { Tile as TileLayer } from "ol/layer";
  import { XYZ } from "ol/source";
  import { MAPURL, ATTRIBUTIONS } from "@/constants";
  import updateMapSize from "@/hooks/updateMapSize";
  import toolBar from "./components/tool-bar.vue";
  import createStyleFunction, {
    vectorPoints,
    vectorLines,
    vectorPolygons,
  } from "./js/createStyleFunction";
  const raster = new TileLayer({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url: MAPURL,
      maxZoom: 20,
    }),
  });

  const initMap = () => {
    const map = new Map({
      //初始化map
      target: "map",
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        raster,
        vectorPoints,
        vectorLines,
        vectorPolygons,
      ],
      view: new View({
        center: [114.2905, 30.5607],
        projection: "EPSG:4326",
        minZoom: 2,
        zoom: 12,
      }),
    });
    // 侧边栏变化更新地图
    updateMapSize(map);
  };
  const handleUpdate = (type, value) => {
    createStyleFunction(type, value);
  };
  const isMobile = () => localStorage.getItem("device") === "mobile";
  onMounted(() => {
    initMap();
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
