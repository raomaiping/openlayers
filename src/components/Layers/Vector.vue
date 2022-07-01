<template>
  <div id="map" ref="map"></div>
  <div id="info" ref="info">&nbsp;</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'ol/ol.css'
import GeoJSON from 'ol/format/GeoJSON'
import Map from 'ol/Map'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import View from 'ol/View'
import { Fill, Stroke, Style } from 'ol/style'
const info = ref(null)

// 矢量图层
const initMap = () => {
  const style = new Style({
    fill: new Fill({
      color: '#eeeeee',
    }),
  })

  const vectorLayer = new VectorLayer({
    background: '#1a2b39',
    source: new VectorSource({
      url: 'https://openlayers.org/data/vector/ecoregions.json',
      format: new GeoJSON(),
    }),
    style: function (feature) {
      const color = feature.get('COLOR_NNH') || '#eeeeee'
      style.getFill().setColor(color)
      return style
    },
  })

  const map = new Map({
    layers: [vectorLayer],
    target: 'map',
    view: new View({
      center: [0, 0],
      zoom: 1,
    }),
  })

  const highlightStyle = new Style({
    stroke: new Stroke({
      color: 'rgba(255, 255, 255, 0.7)',
      width: 2,
    }),
  })

  const featureOverlay = new VectorLayer({
    source: new VectorSource(),
    map: map,
    style: highlightStyle,
  })

  let highlight
  const displayFeatureInfo = function (pixel) {
    vectorLayer.getFeatures(pixel).then(function (features) {
      const feature = features.length ? features[0] : undefined
      if (features.length) {
        info.value.innerHTML =
          feature.get('ECO_NAME') + ': ' + feature.get('NNH_NAME')
      } else {
        info.value.innerHTML = '&nbsp;'
      }

      if (feature !== highlight) {
        if (highlight) {
          featureOverlay.getSource().removeFeature(highlight)
        }
        if (feature) {
          featureOverlay.getSource().addFeature(feature)
        }
        highlight = feature
      }
    })
  }

  map.on('pointermove', function (evt) {
    if (evt.dragging) {
      return
    }
    const pixel = map.getEventPixel(evt.originalEvent)
    displayFeatureInfo(pixel)
  })

  map.on('click', function (evt) {
    displayFeatureInfo(evt.pixel)
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
#info {
  position: absolute;
  bottom: 50px;
  left: 100px;
  width: 800px;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  background: #fff;
  color: red;
}
</style>
