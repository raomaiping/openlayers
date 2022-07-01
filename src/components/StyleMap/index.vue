<template>
  <div id="map"></div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import { XYZ, Vector as VectorSource } from 'ol/source'
import { fromLonLat } from 'ol/proj'
import VectorLayer from 'ol/layer/Vector'
import { features1 } from './features'

const state = reactive({
  map: null,
})
// 初始化地图
const initMap = () => {
  const target = 'map'
  const tileLayer = [
    new TileLayer({
      source: new XYZ({
        url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
      }),
    }),
  ]
  const view = new View({
    center: fromLonLat([104.912777, 34.730746]),
    zoom: 4.5,
  })
  state.map = new Map({
    target,
    layers: tileLayer,
    view,
  })
}

onMounted(() => {
  initMap()
  console.log(features1)
  // 先设置图层
  let routeLayer = new VectorLayer({
    source: new VectorSource({
      features: features1, //这里的features就是矢量图层
    }),
  })

  // 添加图层到地图上
  state.map.addLayer(routeLayer)
})
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
