import { createRouter, createWebHashHistory } from "vue-router";
import layout from "@/layout";
import MapControls from "./routers/map-controls";
import ThirdPartyMapDisplay from "./routers/third-party-map-display";
import Drawing from "./routers/drawing";
import MapMarker from "./routers/map-marker";

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
        meta: { title: "首页" },
        component: () => import("@/views/home"),
      },
    ],
  },
  MapControls,
  ThirdPartyMapDisplay,
  Drawing,
  MapMarker,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
