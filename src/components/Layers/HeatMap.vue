<template>
  <div id="map" ref="map"></div>
  <input
    ref="radius"
    id="radius"
    type="range"
    min="1"
    max="50"
    step="1"
    value="5"
    @input="blurHandler"
    @change="blurHandler"
  />
  <input
    ref="blur"
    id="blur"
    type="range"
    min="1"
    max="50"
    step="1"
    value="15"
    @input="radiusHandler"
    @change="radiusHandler"
  />
</template>

<script setup>
import 'ol/ol.css'
import { onMounted, ref } from 'vue'
import { Map, View } from 'ol'
import { Heatmap as HeatmapLayer, Tile as TileLayer } from 'ol/layer'
import VectorSource from 'ol/source/Vector'
import KML from 'ol/format/KML'
import Stamen from 'ol/source/Stamen'
const radius = ref(null)
const blur = ref(null)
// 热力图层
let vector
const initMap = () => {
  let target = 'map' //跟页面元素的 id 绑定来进行渲染
  vector = new HeatmapLayer({
    source: new VectorSource({
      url: 'https://openlayers.org/en/latest/examples/data/kml/2012_Earthquakes_Mag5.kml',
      format: new KML({
        extractStyles: false,
      }),
    }),
    blur: parseInt(blur.value?.value, 10),
    radius: parseInt(radius.value?.value, 10),
    weight: function (feature) {
      var name = feature.get('name')
      var magnitude = parseFloat(name.substr(2))
      return magnitude - 5
    },
  })

  const raster = new TileLayer({
    source: new Stamen({
      layer: 'toner',
    }),
  })
  new Map({
    target: target, //绑定dom元素进行渲染
    layers: [raster, vector], //配置地图数据源
    view: new View({
      center: [0, 0],
      zoom: 2,
    }), //配置地图显示的options配置（坐标系，中心点，缩放级别等）
  })
}
const blurHandler = (e) => {
  vector.setBlur(parseInt(e.target.value, 10))
}

const radiusHandler = (e) => {
  console.log(parseInt(e.target.value, 10))
  vector.setBlur(parseInt(e.target.value, 10))
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
#radius {
  position: absolute;
  top: 10px;
  left: 50px;
}
#blur {
  position: absolute;
  top: 10px;
  left: 200px;
}
</style>
