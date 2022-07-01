<template>
  <div id="map" ref="map"></div>
</template>

<script setup>
import 'ol/ol.css'
import { onMounted } from 'vue'
import { Map, View } from 'ol'
import Tile from 'ol/layer/Tile'
import { fromLonLat } from 'ol/proj'
import OSM from 'ol/source/OSM'
import Graticule from 'ol/layer/Graticule'
import { Stroke } from 'ol/style'
// 地图上覆盖的网格标尺图层
const initMap = () => {
  let target = 'map' //跟页面元素的 id 绑定来进行渲染
  let tileLayer = [
    new Tile({
      source: new OSM(),
    }),
    new Graticule({
      // the style to use for the lines, optional.
      strokeStyle: new Stroke({
        color: 'rgba(255,120,0,0.9)',
        width: 2,
        lineDash: [0.5, 4],
      }),
      showLabels: true,
      wrapX: false,
    }),
  ]
  let view = new View({
    center: fromLonLat([104.912777, 34.730746]), //地图中心坐标
    zoom: 4.5, //缩放级别
  })
  new Map({
    target: target, //绑定dom元素进行渲染
    layers: tileLayer, //配置地图数据源
    view: view, //配置地图显示的options配置（坐标系，中心点，缩放级别等）
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
