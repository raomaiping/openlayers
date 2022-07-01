<template>
  <div id="map" ref="map"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import { fromLonLat } from 'ol/proj'
import Tile from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import { FullScreen } from 'ol/control'

// 全屏控件
const initMap = () => {
  const fullScreen = new FullScreen()
  const controls = [fullScreen]
  let tileLayer = [
    new Tile({
      source: new OSM(),
    }),
  ]
  let view = new View({
    center: fromLonLat([104.912777, 34.730746]), //地图中心坐标
    zoom: 4.5, //缩放级别
  })
  new Map({
    target: 'map', //绑定dom元素进行渲染
    layers: tileLayer, //配置地图数据源
    view, //配置地图显示的options配置（坐标系，中心点，缩放级别等）
    controls,
  })
}
onMounted(() => {
  initMap()
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
