<template>
  <div id="map"></div>
</template>

<script setup>
  import "ol/ol.css";
  import { onMounted } from "vue";
  import { Map, View } from "ol";
  import { defaults, ZoomToExtent } from "ol/control";
  import { Tile as TileLayer } from "ol/layer";
  import { XYZ } from "ol/source";
  import { MAPKEY, ATTRIBUTIONS } from "@/constants";

  const raster = new TileLayer({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url:
        "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=" +
        MAPKEY,
      maxZoom: 20,
    }),
  });

  const initMap = () => {
    new Map({
      //初始化map
      target: "map",
      controls: defaults({
        /** @type {olx.control.AttributionOptions} */
        attributionOptions: {
          collapsible: true,
        },
      }).extend([
        new ZoomToExtent({
          extent: [
            // 坐标值
            813079.7791264898, 5929220.284081122, 848966.9639063801,
            5936863.986909639,
          ],
        }),
      ]),
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        raster,
      ],
      view: new View({
        projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3 857
        center: [114.064839, 22.548857], // 深圳坐标
        zoom: 12, // 地图缩放级别（打开页面时默认级别）
      }),
    });
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
</style>
