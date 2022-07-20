<template>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { Map, View } from "ol";
  import { Tile as TileLayer } from "ol/layer";
  import { onMounted } from "vue";
  import { XYZ } from "ol/source";
  import { ATTRIBUTIONS, SHENZHEN } from "@/constants";
  import updateMapSize from "@/hooks/updateMapSize";

  const raster = new TileLayer({
    title: "谷歌地图",
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
      maxZoom: 20,
    }),
  });

  onMounted(() => {
    const map = new Map({
      //地图容器div的ID
      target: "map",
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        raster,
      ],
      //地图视图设置
      view: new View({
        //地图初始中心点
        projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
        center: SHENZHEN, // 深圳坐标
        //地图初始显示级别
        zoom: 10,
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
