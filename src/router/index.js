import { createRouter, createWebHashHistory } from "vue-router";
import layout from "@/layout";
export const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: layout,
    meta: { title: "首页" },
    children: [
      {
        path: "",
        name: "Home",
        component: () => import("@/views/home"),
      },
    ],
  },
  {
    path: "/map-controls",
    meta: { title: "地图控件" },
    component: layout,
    children: [
      {
        path: "set-background",
        name: "SetBackground",
        meta: { title: "设置背景" },
        component: () =>
          import("@/views/map-controls/set-background"),
      },
      {
        path: "navigation",
        name: "Navigation",
        meta: { title: "导航控件" },
        component: () => import("@/views/map-controls/navigation"),
      },
      {
        path: "operation",
        name: "Operation",
        meta: { title: "基本操作" },
        component: () => import("@/views/map-controls/operation"),
      },
      {
        path: "layer-control",
        name: "LayerControl",
        meta: { title: "图层控件" },
        component: () => import("@/views/map-controls/layer-control"),
      },
      {
        path: "mouse-position",
        name: "MousePosition",
        meta: { title: "鼠标位置" },
        component: () =>
          import("@/views/map-controls/mouse-position"),
      },
      {
        path: "scale-line",
        name: "ScaleLine",
        meta: { title: "比例尺控件" },
        component: () =>
          import("@/views/map-controls/scale-line"),
      },
      {
        path: "overview-map",
        name: "OverviewMap",
        meta: { title: "鹰眼控件" },
        component: () =>
          import("@/views/map-controls/overview-map"),
      },
      {
        path: "full-screen",
        name: "FullScreen",
        meta: { title: "全屏显示控件" },
        component: () =>
          import("@/views/map-controls/full-screen"),
      },
      {
        path: "layer-search",
        name: "LayerSearch",
        meta: { title: "图层探查" },
        component: () =>
          import("@/views/map-controls/layer-search"),
      },
      {
        path: "map-animation",
        name: "MapAnimation",
        meta: { title: "动画效果" },
        component: () =>
          import("@/views/map-controls/map-animation"),
      },
      {
        path: "measure",
        name: "Measure",
        meta: { title: "测量" },
        component: () =>
          import("@/views/map-controls/measure/index.vue"),
      },
    ],
  },
  {
    path: "/third-party-map-display",
    meta: { title: "多源数据" },
    component: layout,
    children: [
      {
        path: "tile-arc-gis",
        name: "TileArcGIS",
        meta: { title: "加载ArcGIS瓦片数据" },
        component: () =>
          import("@/views/third-party-map-display/tile-arc-gis"),
      },
      {
        path: "image-arc-gis",
        name: "ImageArcGis",
        meta: { title: "加载ArcGIS影像数据" },
        component: () =>
          import("@/views/third-party-map-display/image-arc-gis"),
      },
      {
        path: "geo-json",
        name: "GeoJSON",
        meta: { title: "加载geoJSON数据" },
        component: () =>
          import("@/views/third-party-map-display/geo-json"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
