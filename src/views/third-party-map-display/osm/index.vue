<template>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { Map, View } from "ol";
  import { OSM } from "ol/source";
  import { Tile as TileLayer } from "ol/layer";
  import { onMounted } from "vue";
  import { ATTRIBUTIONS } from "@/constants";
  import updateMapSize from "@/hooks/updateMapSize";

  onMounted(() => {
    const map = new Map({
      //地图容器div的ID
      target: "map",
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        new TileLayer({
          //图层对应数据源，此为加载OpenStreetMap在线瓦片服务数据
          source: new OSM({
            attributions: ATTRIBUTIONS,
          }),
        }),
      ],
      //地图视图设置
      view: new View({
        //地图初始中心点
        center: [0, 0],
        //地图初始显示级别
        zoom: 2,
      }),
    });
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
