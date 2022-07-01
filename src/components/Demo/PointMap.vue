<template>
  <div id="map" ref="map"></div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import 'ol/ol.css'
import TileLayer from 'ol/layer/Tile'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import XYZ from 'ol/source/XYZ'
import { Map, View, Feature } from 'ol'
import { Style, Icon, Text, Fill, Stroke } from 'ol/style'
import { Point } from 'ol/geom'
import { defaults as defaultControls } from 'ol/control'
import { fromLonLat } from 'ol/proj'

const map = ref(null)
const state = reactive({
  map: null,
  pointLayer: null,
  featuresArr: [],
})
// 在地图上添加gif动态图
// 初始化地图
const initMap = () => {
  state.map = new Map({
    target: 'map',
    controls: defaultControls({
      zoom: true,
    }).extend([]),
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
        }),
      }),
    ],
    view: new View({
      center: fromLonLat([108.522097, 37.272848]),
      zoom: 4.7,
      maxZoom: 19,
      minZoom: 4,
    }),
  })
}

const blue = require('@/assets/blue.png')
const lv = require('@/assets/lv.png')
const createLabelStyle = (data) => {
  const { type, name } = data
  const src = type === 'bule' ? blue : lv
  return new Style({
    image: new Icon({
      //设置图标点
      anchor: [0.5, 60],
      //图标起点
      anchorOrigin: 'top-right',
      //指定x值为图标点的x值
      anchorXUnits: 'fraction',
      //指定Y值为像素的值
      anchorYUnits: 'pixels',
      //偏移
      offsetOrigin: 'top-right',
      // offset:[0,10],
      //图标缩放比例
      scale: 0.4,
      //透明度
      opacity: 0.75,
      //图标的url
      src,
    }),
    text: new Text({
      //位置
      textAlign: 'center',
      //基准线
      textBaseline: 'middle',
      //文字样式
      font: 'normal 14px 微软雅黑',
      //文本内容
      text: name,
      //文本填充样式（即文字颜色）
      fill: new Fill({ color: '#aa3300' }),
      stroke: new Stroke({ color: '#ffcc33', width: 2 }),
    }),
  })
}

/**
 * 批量根据经纬度坐标打点
 */
const addPoints = (coordinates) => {
  // 设置图层
  state.pointLayer = new VectorLayer({
    source: new VectorSource(),
  })
  // 添加图层
  state.map.addLayer(state.pointLayer)
  // 循环添加feature
  for (let i = 0; i < coordinates.length; i++) {
    // 创建feature，一个feature就是一个点坐标信息
    let feature = new Feature({
      geometry: new Point(fromLonLat([coordinates[i].x, coordinates[i].y])),
      name: `点位${i}`,
    })
    feature.setStyle(createLabelStyle(coordinates[i]))
    feature.set('point', coordinates[i])
    state.featuresArr.push(feature)
  } // for 结束
  // 批量添加feature
  state.pointLayer.getSource().addFeatures(state.featuresArr)
}

onMounted(() => {
  initMap()
  let coordinates = [
    { x: '106.918082', y: '31.441314', type: 'lv', name: '点位一' },
    {
      x: '86.36158200334317',
      y: '41.42448570787448',
      type: 'bule',
      name: '点位二',
    },
    {
      x: '89.71757707811526',
      y: '31.02619817424643',
      type: 'lv',
      name: '点位三',
    },
    {
      x: '116.31694544853109',
      y: '39.868508850821115',
      type: 'bule',
      name: '点位四',
    },
    {
      x: '103.07940932026341',
      y: '30.438580338450862',
      type: 'lv',
      name: '点位五',
    },
  ]
  addPoints(coordinates) //根据坐标点批量打点
  state.map.on('singleclick', (e) => {
    state.map.forEachFeatureAtPixel(e.pixel, (feature) => {
      console.log(feature.get('point'))
    })
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
</style>
