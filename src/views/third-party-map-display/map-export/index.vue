<template>
  <div id="menu">
    <el-button type="primary" @click="handleExport">导出地图</el-button>
  </div>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { onMounted, ref } from "vue";
  import { Map, View } from "ol";
  import { Tile as TileLayer } from "ol/layer";
  import { XYZ } from "ol/source";
  import { MAPURL, ATTRIBUTIONS, AUTHOR_INFO } from "@/constants";
  import { exportMap } from "@/lib";
  import updateMapSize from "@/hooks/updateMapSize";

  const map = ref(null);
  const raster = new TileLayer({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url: MAPURL,
      maxZoom: 20,
      crossOrigin: "anonymous",
    }),
  });

  const initMap = () => {
    map.value = new Map({
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
    });
    // 侧边栏变化更新地图
    updateMapSize(map.value);
  };

  const handleExport = () => {
    const { NAME, QQ, WX } = AUTHOR_INFO;
    exportMap(map.value, `${NAME} QQ:${QQ} WX:${WX}`);
  };
  onMounted(() => {
    initMap();
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
  #menu {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
  }
</style>
