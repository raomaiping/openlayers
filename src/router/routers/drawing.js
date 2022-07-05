import layout from "@/layout";

export default {
  path: "/drawing",
  meta: { title: "图形绘制" },
  component: layout,
  children: [
    {
      path: "draw-features",
      name: "DrawFeatures",
      meta: { title: "绘制几何图形" },
      component: () =>
        import("@/views/drawing/draw-features"),
    },
    {
      path: "modify-features",
      name: "ModifyFeatures",
      meta: { title: "图形交互编辑" },
      component: () =>
        import("@/views/drawing/modify-features"),
    },
  ],
}