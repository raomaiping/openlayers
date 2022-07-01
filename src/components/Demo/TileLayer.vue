<template>
  <div id="map"></div>
  <div id="mouse-position">
    <el-checkbox-group v-model="state.checkList">
      <el-checkbox label="天地图影像图" @change="changImage"></el-checkbox>
      <el-checkbox label="天地图影像标注" @change="changText"></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import { fromLonLat } from 'ol/proj'
const state = reactive({
  checkList: [],
  map: null,
  TiandiMap_img: null,
  TiandiMap_cia: null,
})
// 切换图层 TileLayer 切换地图底图，图层叠加效果
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

// 天地图影像图层
const changImage = (checked) => {
  if (checked) {
    state.TiandiMap_img = new TileLayer({
      name: '天地图影像图层',
      source: new XYZ({
        url: 'http://t0.tianditu.com/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=5d27dc75ca0c3bdf34f657ffe1e9881d', //parent.TiandituKey()为天地图密钥
        wrapX: false,
      }),
    })
    // 添加到地图上
    state.map.addLayer(state.TiandiMap_img)
  } else {
    state.map.removeLayer(state.TiandiMap_img)
  }
}

const changText = (checked) => {
  if (checked) {
    state.TiandiMap_cia = new TileLayer({
      name: '天地图影像注记图层',
      source: new XYZ({
        url: 'http://t0.tianditu.com/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=5d27dc75ca0c3bdf34f657ffe1e9881d', //parent.TiandituKey()为天地图密钥
        wrapX: false,
      }),
    })
    // 添加到地图上
    state.map.addLayer(state.TiandiMap_cia)
  } else {
    state.map.removeLayer(state.TiandiMap_cia)
  }
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
#mouse-position {
  float: left;
  position: absolute;
  top: 75px;
  right: 10px;
  width: 200px;
  height: 50px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  /*在地图容器中的层，要设置z-index的值让其显示在地图上层*/
  z-index: 2000;
  color: white;
}
#mouse-position .el-checkbox {
  color: white;
}
/* 鼠标位置信息自定义样式设置 */
#mouse-position .custom-mouse-position {
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-family: '微软雅黑';
}
</style>
