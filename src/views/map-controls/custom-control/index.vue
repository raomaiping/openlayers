<template>
  <div class="top">创建旋转到正北的（把地图摆正）按钮</div>
  <div id="map"></div>
</template>

<script setup>
import 'ol/ol.css'
import { onMounted } from 'vue'
import { Map, View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { defaults, Control } from 'ol/control'
import { XYZ } from 'ol/source'
import { MAPURL, ATTRIBUTIONS } from '@/constants'
import updateMapSize from '@/hooks/updateMapSize'

class RotateNorthControl extends Control {
  /**
   * @param {Object} [opt_options] Control options.
   */
  constructor(opt_options) {
    const options = opt_options || {}
    console.log(opt_options)
    const button = document.createElement('button')
    button.innerHTML = 'N'

    const element = document.createElement('div')
    element.className = 'rotate-north ol-unselectable ol-control'
    element.appendChild(button)

    super({
      element: element,
      target: options.target,
    })

    button.addEventListener('click', this.handleRotateNorth.bind(this), false)
  }

  handleRotateNorth() {
    this.getMap().getView().setRotation(0)
  }
}
const raster = new TileLayer({
  source: new XYZ({
    attributions: ATTRIBUTIONS,
    url: MAPURL,
    maxZoom: 20,
  }),
})
const initMap = () => {
  const map = new Map({
    //初始化map
    target: 'map',
    //地图容器中加载的图层
    layers: [
      //加载瓦片图层数据
      raster,
    ],
    view: new View({
      projection: 'EPSG:4326', // 坐标系，有EPSG:4326和EPSG:3 857
      center: [0, 0], // 深圳坐标
      //地图初始显示级别
      zoom: 5,
      rotation: 1,
    }),
    //加载控件到地图容器中
    controls: defaults().extend([
      new RotateNorthControl(), // 加载自定义控件
    ]),
  })
  // 侧边栏变化更新地图
  updateMapSize(map)
}
onMounted(() => {
  initMap()
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
#map {
  height: calc(100% - 50px);
}
:deep(.rotate-north) {
  top: 65px;
  left: 0.5em;
}
:deep(.ol-touch .rotate-north) {
  top: 80px;
}
</style>
