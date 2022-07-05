import layout from "@/layout";

export default {
  path: "/third-party-map-display",
  meta: { title: "多源数据" },
  component: layout,
  children: [
    {
      path: "tile-arc-gis",
      name: "TileArcGIS",
      meta: { title: "ArcGIS瓦片数据" },
      component: () =>
        import("@/views/third-party-map-display/tile-arc-gis"),
    },
    {
      path: "image-arc-gis",
      name: "ImageArcGis",
      meta: { title: "ArcGIS影像数据" },
      component: () =>
        import("@/views/third-party-map-display/image-arc-gis"),
    },
    {
      path: "geo-json",
      name: "GeoJSON",
      meta: { title: "geoJSON" },
      component: () =>
        import("@/views/third-party-map-display/geo-json"),
    },
    {
      path: "kml",
      name: "KML",
      meta: { title: "KML" },
      component: () =>
        import("@/views/third-party-map-display/kml"),
    },
    {
      path: "gpx",
      name: "GPX",
      meta: { title: "GPX" },
      component: () =>
        import("@/views/third-party-map-display/gpx"),
    },
    {
      path: "osm",
      name: "OSM",
      meta: { title: "OSM" },
      component: () =>
        import("@/views/third-party-map-display/osm"),
    },
    {
      path: "bing",
      name: "Bing",
      meta: { title: "Bing" },
      component: () =>
        import("@/views/third-party-map-display/bing"),
    },
    {
      path: "tianditu-map",
      name: "TiandituMap",
      meta: { title: "天地图" },
      component: () =>
        import("@/views/third-party-map-display/tianditu-map"),
    },
    {
      path: "baidu-map",
      name: "BaiduMap",
      meta: { title: "百度地图" },
      component: () =>
        import("@/views/third-party-map-display/baidu-map"),
    },
    {
      path: "google-map",
      name: "GoogleMap",
      meta: { title: "谷歌地图" },
      component: () =>
        import("@/views/third-party-map-display/google-map"),
    },
    {
      path: "gao-de-map",
      name: "GaoDeMap",
      meta: { title: "高德地图" },
      component: () =>
        import("@/views/third-party-map-display/gao-de-map"),
    },
    {
      path: "canvas-tiles",
      name: "CanvasTiles",
      meta: { title: "瓦片网格" },
      component: () =>
        import("@/views/third-party-map-display/canvas-tiles"),
    },
    {
      path: "map-export",
      name: "MapExport",
      meta: { title: "地图打印" },
      component: () =>
        import("@/views/third-party-map-display/map-export"),
    },
  ],
}