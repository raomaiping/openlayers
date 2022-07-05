<template>
  <div id="map" ref="map"></div>
  <el-button type="primary" class="btn" @click="setBackgroundImage"
    >设置背景</el-button
  >
</template>

<script setup>
  import "ol/ol.css";
  import { onMounted, ref } from "vue";
  import { Map, View } from "ol";
  import { Projection } from "ol/proj";
  import { Image } from "ol/layer";
  import { ImageStatic } from "ol/source";
  import { getCenter } from "ol/extent";
  import duck from "@/assets/yellow_duck.webp";
  import { ATTRIBUTIONS } from "@/constants";
  // 单张图片的矢量图层
  const map = ref(null);
  const initMap = () => {
    const extent = [0, 0, 1024, 968]; //表示图片的尺寸
    const projection = new Projection({
      code: "EPSG:3857",
      extent,
    });
    var imageLayer = new Image({
      source: new ImageStatic({
        attributions: ATTRIBUTIONS,
        url: "https://www.raomaiping.host/images/world6.jpg",
        projection,
        imageExtent: extent,
      }),
    });
    new Map({
      //初始化map
      target: "map",
      layers: [imageLayer],
      view: new View({
        projection,
        center: getCenter(extent),
        zoom: 2,
      }),
    });
  };
  const setBackgroundImage = () => {
    map.value.style.backgroundImage = `url(${duck})`;
    console.log(map, duck);
  };
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
  .btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
