<template>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { Map, View } from "ol";
  import { Tile as TileLayer } from "ol/layer";
  import { onMounted } from "vue";
  import { XYZ, TileDebug } from "ol/source";
  import { ATTRIBUTIONS, MAPURL } from "@/constants";
  import updateMapSize from "@/hooks/updateMapSize";

  //实例化图层数据源对象
  const TiandituSource = new XYZ({
    attributions: ATTRIBUTIONS,
    wrapX: false,
    url: MAPURL,
  });

  onMounted(() => {
    const map = new Map({
      //地图容器div的ID
      target: "map",
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        new TileLayer({
          source: TiandituSource,
        }),
        //加载瓦片网格图层
        new TileLayer({
          source: new TileDebug({
            //地图投影坐标系
            projection: "EPSG:3857",
            //获取瓦片图层数据对象（osmSource）的网格信息
            tileGrid: TiandituSource.getTileGrid(),
          }),
        }),
      ],
      //地图视图设置
      view: new View({
        //地图初始中心点
        center: [12900000, 4900000],
        //地图初始显示级别
        zoom: 8,
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
