<template>
  <div class="btns">
    <el-button type="primary" @click="loadVectData">加载GEOJSON</el-button>
  </div>
  <div id="map"></div>
</template>
<script>
  import "ol/ol.css";
  import { onMounted } from "vue";
  import { Map, View } from "ol";
  import { Tile, Vector as VectorLayer } from "ol/layer";
  import { XYZ, Vector as VectorSource } from "ol/source";
  import { GeoJSON } from "ol/format";
  import { get } from "ol/proj";
  import { Circle, Stroke, Style, Fill } from "ol/style";
  import hubei from "@/geoJson/hubei.json";
  //矢量数据图层
  let vectorLayer;
  // 地图实例
  let map;
  //地图投影坐标系
  const projection = get("EPSG:3857");

  /**
   *矢量几何要素的样式
   */
  const image = new Circle({
    radius: 5,
    fill: null,
    stroke: new Stroke({ color: "red", width: 1 }),
  });
  const styles = {
    Point: [
      new Style({
        //点样式
        image: image,
      }),
    ],
    LineString: [
      new Style({
        stroke: new Stroke({
          //线的边界样式
          color: "green",
          width: 1,
        }),
      }),
    ],
    MultiLineString: [
      new Style({
        stroke: new Stroke({
          //多线的边界样式
          color: "green",
          width: 1,
        }),
      }),
    ],
    MultiPoint: [
      new Style({
        //多点的点样式
        image: image,
      }),
    ],
    MultiPolygon: [
      new Style({
        stroke: new Stroke({
          //多区的边界样式
          color: "yellow",
          width: 1,
        }),
        fill: new Fill({
          //多区的填充样式
          color: "rgba(255, 255, 0, 0.1)",
        }),
      }),
    ],
    Polygon: [
      new Style({
        stroke: new Stroke({
          //区的边界样式
          color: "blue",
          lineDash: [4],
          width: 3,
        }),
        fill: new Fill({
          //区的填充样式
          color: "rgba(0, 0, 255, 0.1)",
        }),
      }),
    ],
    GeometryCollection: [
      new Style({
        stroke: new Stroke({
          //集合要素的边界样式
          color: "magenta",
          width: 2,
        }),
        fill: new Fill({
          //集合要素的填充样式
          color: "magenta",
        }),
        image: new Circle({
          //集合要素的点样式
          radius: 10,
          fill: null,
          stroke: new Stroke({
            color: "magenta",
          }),
        }),
      }),
    ],
    Circle: [
      new Style({
        stroke: new Stroke({
          //圆的边界样式
          color: "red",
          width: 2,
        }),
        fill: new Fill({
          //圆的填充样式
          color: "rgba(255,0,0,0.2)",
        }),
      }),
    ],
  };
  //根据要素类型设置几何要素的样式
  const styleFunction = (feature) => styles[feature.getGeometry().getType()];

  const initMap = () => {
    //实例化Map对象加载地图
    map = new Map({
      //地图容器div的ID
      target: "mapCon",
      //地图容器中加载的图层
      layers: [
        //加载瓦片图层数据
        new Tile({
          title: "天地图矢量图层",
          source: new XYZ({
            url: "http://t0.tianditu.com/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f&tk=3bc6874f2b919aa581635abab7759a3f",
            attributions: "天地图的属性描述",
            wrapX: false,
          }),
          preload: Infinity,
        }),
        new Tile({
          title: "天地图矢量图层注记",
          source: new XYZ({
            url: "http://t0.tianditu.com/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=3bc6874f2b919aa581635abab7759a3f&tk=3bc6874f2b919aa581635abab7759a3f",
            attributions: "天地图的属性描述",
            wrapX: false,
          }),
          preload: Infinity,
        }),
      ],
      //地图视图设置
      view: new View({
        //设置地图投影坐标系
        projection: projection,
        //地图初始中心点
        center: [0, 0],
        //地图初始显示级别
        zoom: 2,
      }),
    });
  };
</script>

<script setup>
  /**
   * 将矢量几何要素显示到地图中
   * @param {String} type 数据类型
   * @param {String} data 数据的url地址
   */
  const loadVectData = () => {
    if (vectorLayer != null || vectorLayer == "undefined") {
      //移除已有矢量图层
      map.removeLayer(vectorLayer);
    }

    //实例化矢量数据源，用GeoJSON格式的类解析
    const vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(hubei),
    });
    console.log(vectorSource);
    vectorLayer = new VectorLayer({
      //矢量数据源
      source: vectorSource,
      //样式设置
      style: styleFunction,
    });
    console.log(map, vectorLayer, hubei);
    //将矢量图层加载到地图中
    map.addLayer(vectorLayer);
    //获取地图视图
    const view = map.getView();
    //平移地图
    view.setCenter([12536865.056410152, 3635008.742201894]);
    //地图缩放
    view.setZoom(6);
  };

  onMounted(() => {
    initMap();
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #map {
    position: absolute;
    top: 50px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .btns {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
  }
</style>
