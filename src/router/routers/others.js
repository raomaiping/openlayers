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
  ],
};
