<template>
  <div id="map"></div>
</template>
<script setup>
  import { onMounted } from "vue";
  import "ol/ol.css";
  import Circle from "ol/geom/Circle";
  import Feature from "ol/Feature";
  import GeoJSON from "ol/format/GeoJSON";
  import Map from "ol/Map";
  import View from "ol/View";
  import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
  import { XYZ, Vector as VectorSource } from "ol/source";
  import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
  import { MAPURL, ATTRIBUTIONS } from "@/constants";
  import updateMapSize from "@/hooks/updateMapSize";

  const raster = new TileLayer({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url: MAPURL,
      maxZoom: 20,
    }),
  });

  const image = new CircleStyle({
    radius: 5,
    fill: null,
    stroke: new Stroke({ color: "red", width: 1 }),
  });

  const styles = {
    Point: new Style({
      image: image,
    }),
    LineString: new Style({
      stroke: new Stroke({
        color: "green",
        width: 1,
      }),
    }),
    MultiLineString: new Style({
      stroke: new Stroke({
        color: "green",
        width: 1,
      }),
    }),
    MultiPoint: new Style({
      image: image,
    }),
    MultiPolygon: new Style({
      stroke: new Stroke({
        color: "yellow",
        width: 1,
      }),
      fill: new Fill({
        color: "rgba(255, 255, 0, 0.1)",
      }),
    }),
    Polygon: new Style({
      stroke: new Stroke({
        color: "blue",
        lineDash: [4],
        width: 3,
      }),
      fill: new Fill({
        color: "rgba(0, 0, 255, 0.1)",
      }),
    }),
    GeometryCollection: new Style({
      stroke: new Stroke({
        color: "magenta",
        width: 2,
      }),
      fill: new Fill({
        color: "magenta",
      }),
      image: new CircleStyle({
        radius: 10,
        fill: null,
        stroke: new Stroke({
          color: "magenta",
        }),
      }),
    }),
    Circle: new Style({
      stroke: new Stroke({
        color: "red",
        width: 2,
      }),
      fill: new Fill({
        color: "rgba(255,0,0,0.2)",
      }),
    }),
  };

  const styleFunction = function (feature) {
    return styles[feature.getGeometry().getType()];
  };

  const geojsonObject = {
    type: "FeatureCollection",
    crs: {
      type: "name",
      properties: {
        name: "EPSG:3857",
      },
    },
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [0, 0],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [4e6, -2e6],
            [8e6, 2e6],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [4e6, 2e6],
            [8e6, -2e6],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [-5e6, -1e6],
              [-3e6, -1e6],
              [-4e6, 1e6],
              [-5e6, -1e6],
            ],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "MultiLineString",
          coordinates: [
            [
              [-1e6, -7.5e5],
              [-1e6, 7.5e5],
            ],
            [
              [1e6, -7.5e5],
              [1e6, 7.5e5],
            ],
            [
              [-7.5e5, -1e6],
              [7.5e5, -1e6],
            ],
            [
              [-7.5e5, 1e6],
              [7.5e5, 1e6],
            ],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-5e6, 6e6],
                [-3e6, 6e6],
                [-3e6, 8e6],
                [-5e6, 8e6],
                [-5e6, 6e6],
              ],
            ],
            [
              [
                [-2e6, 6e6],
                [0, 6e6],
                [0, 8e6],
                [-2e6, 8e6],
                [-2e6, 6e6],
              ],
            ],
            [
              [
                [1e6, 6e6],
                [3e6, 6e6],
                [3e6, 8e6],
                [1e6, 8e6],
                [1e6, 6e6],
              ],
            ],
          ],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "GeometryCollection",
          geometries: [
            {
              type: "LineString",
              coordinates: [
                [-5e6, -5e6],
                [0, -5e6],
              ],
            },
            {
              type: "Point",
              coordinates: [4e6, -5e6],
            },
            {
              type: "Polygon",
              coordinates: [
                [
                  [1e6, -6e6],
                  [3e6, -6e6],
                  [2e6, -4e6],
                  [1e6, -6e6],
                ],
              ],
            },
          ],
        },
      },
    ],
  };

  const vectorSource = new VectorSource({
    features: new GeoJSON().readFeatures(geojsonObject),
  });

  vectorSource.addFeature(new Feature(new Circle([5e6, 7e6], 1e6)));

  const vectorLayer = new VectorLayer({
    source: vectorSource,
    style: styleFunction,
  });

  onMounted(() => {
    const map = new Map({
      layers: [raster, vectorLayer],
      target: "map",
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
    // 侧边栏变化更新地图
    updateMapSize(map);
  });
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
