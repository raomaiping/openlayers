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
import MousePosition from 'ol/control/MousePosition'
import { createStringXY } from 'ol/coordinate'
// 鼠标控件
const initMap = () => {
  const mousePositionControl = new MousePosition({
    //坐标格式
    coordinateFormat: createStringXY(5),
    //地图投影坐标系（若未设置则输出为默认投影坐标系下的坐标）
    projection: 'EPSG:4326',
    //坐标信息显示样式类名，默认是'ol-mouse-position'
    className: 'custom-mouse-position',
    //显示鼠标位置信息的目标容器
    target: document.getElementById('mouse-position'),
    //未定义坐标的标记
    undefinedHTML: '&nbsp;',
  })

  const controls = [mousePositionControl]
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
