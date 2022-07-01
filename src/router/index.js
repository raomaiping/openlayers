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
        component: () => import("@/views/home/index.vue"),
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
          import("@/views/map-controls/set-background/index.vue"),
      },
      {
        path: "navigation",
        name: "Navigation",
        meta: { title: "导航控件" },
        component: () => import("@/views/map-controls/navigation/index.vue"),
      },
      {
        path: "operation",
        name: "Operation",
        meta: { title: "基本操作" },
        component: () => import("@/views/map-controls/operation/index.vue"),
      },
      {
        path: "layer-control",
        name: "LayerControl",
        meta: { title: "图层控件" },
        component: () => import("@/views/map-controls/layer-control/index.vue"),
      },
      {
        path: "mouse-position",
        name: "MousePosition",
        meta: { title: "鼠标位置" },
        component: () =>
          import("@/views/map-controls/mouse-position/index.vue"),
      },
      {
        path: "scale-line",
        name: "ScaleLine",
        meta: { title: "比例尺控件" },
        component: () =>
          import("@/views/map-controls/scale-line/index.vue"),
      },
      {
        path: "overview-map",
        name: "OverviewMap",
        meta: { title: "鹰眼控件" },
        component: () =>
          import("@/views/map-controls/overview-map/index.vue"),
      },
      {
        path: "full-screen",
        name: "FullScreen",
        meta: { title: "全屏显示控件" },
        component: () =>
          import("@/views/map-controls/full-screen/index.vue"),
      },
      { 
        path: "layer-search",
        name: "LayerSearch",
        meta: { title: "图层探查" },
        component: () =>
          import("@/views/map-controls/layer-search/index.vue"),
      },
      { 
        path: "map-animation",
        name: "MapAnimation",
        meta: { title: "动画效果" },
        component: () =>
          import("@/views/map-controls/map-animation/index.vue"),
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
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
