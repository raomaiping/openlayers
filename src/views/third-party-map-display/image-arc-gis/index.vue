<template>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { onMounted } from "vue";
  import { Map, View } from "ol";
  import { Tile } from "ol/layer";
  import { XYZ } from "ol/source";
  import { ATTRIBUTIONS } from "@/constants";
  import updateMapSize from "@/hooks/updateMapSize";

  const arcGISLayers = new Tile({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url:
        "http://server.arcgisonline.com/ArcGIS/rest/services/" +
        "World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
    }),
  });
  const initMap = () => {
    return new Map({
      //初始化map
      target: "map",
      //地图容器中加载的图层
      layers: [],
      //地图视图设置
      view: new View({
        //地图初始中心点
        center: [-10997148, 4569099],
        zoom: 5, //地图初始显示级别
      }),
    });
  };
  onMounted(() => {
    const map = initMap();
    //添加瓦片地图图层
    map.addLayer(arcGISLayers);
    // 侧边栏变化更新地图
    updateMapSize(map);
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
