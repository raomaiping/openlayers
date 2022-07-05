<template>
  <div id="map" class="map"></div>
  <div id="info">&nbsp;</div>
</template>

<script setup>
  import { onMounted } from "vue";
  import "ol/ol.css";
  import GPX from "ol/format/GPX";
  import Map from "ol/Map";
  import VectorSource from "ol/source/Vector";
  import View from "ol/View";
  import XYZ from "ol/source/XYZ";
  import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
  import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
  import { MAPKEY, ATTRIBUTIONS } from "@/constants";
  const raster = new TileLayer({
    source: new XYZ({
      attributions: ATTRIBUTIONS,
      url:
        "https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=" +
        MAPKEY,
      maxZoom: 20,
    }),
  });

  const style = {
    Point: new Style({
      image: new CircleStyle({
        fill: new Fill({
          color: "rgba(255,255,0,0.4)",
        }),
        radius: 5,
        stroke: new Stroke({
          color: "#ff0",
          width: 1,
        }),
      }),
    }),
    LineString: new Style({
      stroke: new Stroke({
        color: "#f00",
        width: 3,
      }),
    }),
    MultiLineString: new Style({
      stroke: new Stroke({
        color: "#0f0",
        width: 3,
      }),
    }),
  };

  const vector = new VectorLayer({
    source: new VectorSource({
      url: "data/gpx/fells_loop.gpx",
      format: new GPX(),
    }),
    style: function (feature) {
      return style[feature.getGeometry().getType()];
    },
  });

  onMounted(() => {
    const map = new Map({
      layers: [raster, vector],
      target: document.getElementById("map"),
      view: new View({
        center: [-7916041.528716288, 5228379.045749711],
        zoom: 12,
      }),
    });

    const displayFeatureInfo = function (pixel) {
      const features = [];
      map.forEachFeatureAtPixel(pixel, function (feature) {
        features.push(feature);
      });
      if (features.length > 0) {
        const info = [];
        let i, ii;
        for (i = 0, ii = features.length; i < ii; ++i) {
          info.push(features[i].get("desc"));
        }
        document.getElementById("info").innerHTML =
          info.join(", ") || "(unknown)";
        map.getTarget().style.cursor = "pointer";
      } else {
        document.getElementById("info").innerHTML = "&nbsp;";
        map.getTarget().style.cursor = "";
      }
    };

    map.on("pointermove", function (evt) {
      if (evt.dragging) {
        return;
      }
      const pixel = map.getEventPixel(evt.originalEvent);
      displayFeatureInfo(pixel);
    });

    map.on("click", function (evt) {
      displayFeatureInfo(evt.pixel);
    });
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
