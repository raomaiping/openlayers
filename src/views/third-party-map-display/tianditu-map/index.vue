<template>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { Map, View } from "ol";
  import { XYZ } from "ol/source";
  import { Tile as TileLayer } from "ol/layer";
  import { onMounted } from "vue";
  import { ATTRIBUTIONS } from "@/constants";

  const raster = new TileLayer({
    name: "天地图影像图层",
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url: "http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f",
      maxZoom: 20,
    }),
  });

  onMounted(() => {
    new Map({
      //地图容器div的ID
      target: "map",
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        raster,
      ],
      //地图视图设置
      view: new View({
        projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
        //地图初始中心点
        center: [120.431427, 36.158763],
        //地图初始显示级别
        zoom: 12,
      }),
    });
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
