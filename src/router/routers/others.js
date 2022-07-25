import layout from "@/layout";

export default {
  icon: "MostlyCloudy",
  path: "/others",
  meta: { title: "高级功能" },
  component: layout,
  children: [
    {
      path: "projection-transformation",
      name: "ProjectionTransformation",
      meta: { title: "动态投影转换" },
      component: () =>
        import("@/views/others/projection-transformation/index.vue"),
    },
    {
      path: "multi-view-linkage",
      name: "MultiViewLinkage",
      meta: { title: "视图联动" },
      component: () => import("@/views/others/multi-view-linkage/index.vue"),
    },
    {
      path: "heatmap",
      name: "Heatmap",
      meta: { title: "热力图" },
      component: () => import("@/views/others/heatmap/index.vue"),
    },
    {
      path: "trajectory-tracking",
      name: "TrajectoryTracking",
      meta: { title: "轨迹跟踪" },
      component: () => import("@/views/others/trajectory-tracking/index.vue"),
    },
    {
      path: "arrow-animation",
      name: "ArrowAnimation",
      meta: { title: "箭头动画" },
      component: () => import("@/views/others/arrow-animation/index.vue"),
    },
    {
      path: "water-wave-animation",
      name: "WaterWaveAnimation",
      meta: { title: "水纹动画" },
      component: () => import("@/views/others/water-wave-animation/index.vue"),
    },
  ],
};
