import layout from "@/layout";

export default {
  path: "/map-marker",
  meta: { title: "地图标注" },
  component: layout,
  children: [
    {
      path: "add-text",
      name: "AddText",
      meta: { title: "添加文字标注" },
      component: () => import("@/views/map-marker/add-text/index.vue"),
    },
  ],
};
