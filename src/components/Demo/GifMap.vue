<template>
  <div id="map" ref="map"></div>
</template>

<script setup>
import { onMounted, reactive, ref, nextTick } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import Overlay from 'ol/Overlay'
import { fromLonLat } from 'ol/proj'
const map = ref(null)
const state = reactive({
  map: null,
  overlay: null,
  markerPoint: null,
  // 点信息
  coordinates: [
    [87.532236, 44.284182],
    [104.043505, 30.58165],
    [116.397289, 39.928632],
  ],
})
// 在地图上添加gif动态图
// 初始化地图
const initMap = () => {
  let target = 'map'
  let tileLayer = new TileLayer({
    source: new OSM(),
  })
  let view = new View({
    center: fromLonLat([104.912777, 34.730746]),
    zoom: 4.5,
  })
  state.map = new Map({
    target: target,
    layers: [tileLayer],
    view: view,
  })
}
// 使用Overlay添加GIF动态图标点位信息
const addGif = () => {
  for (let i = 0; i < state.coordinates.length; i++) {
    const oDiv = document.createElement('span')
    const mapDom = map.value
    oDiv.id = 'gif-' + i
    oDiv.className = 'gif'
    oDiv.style = `
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_mini%2Cc_zoom%2Cw_640%2Fimages%2F20170819%2Ff4db5f72c8234b29a60e8e60526d49c9.gif&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653205931&t=370e9b7f0d4fb700885db1e0b4442b20') no-repeat;
    background-size: 100px 100px;
  `
    mapDom.appendChild(oDiv)
    nextTick(() => {
      state.markerPoint = new Overlay({
        position: fromLonLat([
          state.coordinates[i][0],
          state.coordinates[i][1],
        ]),
        positioning: 'center-center',
        element: document.getElementById('gif-' + i),
        stopEvent: false,
      })
      state.map.addOverlay(state.markerPoint)
    })
  }
}
onMounted(() => {
  initMap()
  addGif()
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
