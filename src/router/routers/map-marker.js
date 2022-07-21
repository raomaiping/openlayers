import layout from "@/layout";

export default {
  icon: "Edit",
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
    {
      path: "add-picture",
      name: "AddPicture",
      meta: { title: "添加图片标注" },
      component: () => import("@/views/map-marker/add-picture/index.vue"),
    },
    {
      path: "add-textand-pic",
      name: "AddTextandPic",
      meta: { title: "添加图文标注" },
      component: () => import("@/views/map-marker/add-textand-pic/index.vue"),
    },
    {
      path: "add-popup",
      name: "AddPopup",
      meta: { title: "添加Popup标注" },
      component: () => import("@/views/map-marker/add-popup/index.vue"),
    },
    {
      path: "add-cluster-labels",
      name: "AddClusterLabels",
      meta: { title: "添加聚合标注" },
      component: () =>
        import("@/views/map-marker/add-cluster-labels/index.vue"),
    },
    {
      path: "street-marked",
      name: "StreetMarked",
      meta: { title: "街道标注" },
      component: () => import("@/views/map-marker/street-marked/index.vue"),
    },
  ],
};
