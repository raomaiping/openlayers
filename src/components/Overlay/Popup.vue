<template>
  <div id="map"></div>
  <div ref="marker" id="marker"></div>
  <div ref="textInfo" id="textInfo" @click="handleClick">我是text文本信息</div>
  <div ref="popup" class="ol-popup">
    <a href="#" ref="closer" class="ol-popup-closer"></a>
    <div ref="content" class="popup-content"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import { fromLonLat } from 'ol/proj'
import { addMarker, addText, addPopup } from './Popup'

/**
 * overlay 实现popup弹窗
 * 实例一个 new Overlay()，设置相关的属性，element 是和页面的 最外层弹窗的dom进行绑定
 * 通过 map.addOverlay(this.overlay) 把 overlay弹窗添加到页面
 * closer.onclick 添加一个 x 关闭弹窗事件
 * 通过 this.map.on("singleclick", function(evt) 事件点击地图触发弹窗效果
 */
const map = ref(null)
const marker = ref(null)
const textInfo = ref(null)
const popup = ref(null)
const closer = ref(null)
const content = ref(null)
// 初始化地图
const initMap = () => {
  let target = 'map' //跟页面元素的 id 绑定来进行渲染
  let tileLayer = new TileLayer({
    source: new XYZ({
      url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
    }),
  })
  let view = new View({
    // projection: "EPSG:4326", //使用这个坐标系
    center: fromLonLat([104.912777, 34.730746]), //地图中心坐标
    zoom: 4.5, //缩放级别
  })
  map.value = new Map({
    target: target, //绑定dom元素进行渲染
    layers: [tileLayer], //配置地图数据源
    view: view, //配置地图显示的options配置（坐标系，中心点，缩放级别等）
  })
}
onMounted(() => {
  initMap()
  // 初始化弹窗方法
  addText({ map: map.value, element: textInfo.value })
  addMarker({ map: map.value, element: marker.value })
  addPopup({
    container: popup.value,
    closer: closer.value,
    content: content.value,
    map: map.value,
  })
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
.ol-popup {
  position: absolute;
  background-color: white;
  -webkit-filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  filter: drop-shadow(0 1px 4px rgba(0, 0, 0, 0.2));
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #cccccc;
  bottom: 12px;
  left: -50px;
}
.ol-popup:after,
.ol-popup:before {
  top: 100%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.ol-popup:after {
  border-top-color: white;
  border-width: 10px;
  left: 48px;
  margin-left: -10px;
}
.ol-popup:before {
  border-top-color: #cccccc;
  border-width: 11px;
  left: 48px;
  margin-left: -11px;
}
.ol-popup-closer {
  text-decoration: none;
  position: absolute;
  top: 2px;
  right: 8px;
}
.popup-content {
  width: 400px;
}
.ol-popup-closer:after {
  content: '✖';
}
#marker {
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
}
#textInfo {
  width: 200px;
  height: 40px;
  line-height: 40px;
  background: burlywood;
  color: yellow;
  text-align: center;
  font-size: 20px;
}
</style>
