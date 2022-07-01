<template>
  <div id="map" ref="map"></div>
</template>

<script setup>
import { onMounted } from 'vue'
import 'ol/ol.css'
import { Map, View } from 'ol'
import { fromLonLat } from 'ol/proj'
import { Tile as TileLayer } from 'ol/layer'
import { XYZ, OSM } from 'ol/source'
import { defaults as defaultControls, OverviewMap } from 'ol/control'

// 地图全局视图（鹰眼图）控件
/**
 * 参数：以下参数都为可选，添加如下代码：
  collapsed，收缩选项，默认为true，收缩；
  collapseLabel，收缩后的图标按钮；
  collapsible，是否可以收缩为图标按钮，默认为 true；
  label，当 overviewmapcontrol 收缩为图标按钮时，显示在图标按钮上的文字或者符号，默认为 »；
  layers，overviewmapcontrol针对的图层，默认情况下为所有图层，一般这里设置的图层和map图层数据一致；
  render，当 overviewmapcontrol 重新绘制时，调用的函数；
  target，放置的 HTML 元素；
  tipLabel，鼠标放置在图标按钮上的提示文字。
 */
const initMap = () => {
  var overviewMapControl = new OverviewMap({
    layers: [
      new TileLayer({
        source: new XYZ({
          url: 'http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}',
        }),
      }),
    ],
  })
  const controls = defaultControls({ zoom: true }).extend([overviewMapControl])
  let tileLayer = [
    new TileLayer({
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
