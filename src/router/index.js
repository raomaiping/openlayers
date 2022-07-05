import { createRouter, createWebHashHistory } from "vue-router";
import layout from "@/layout";
import MapControls from './routers/map-controls'
import ThirdPartyMapDisplay from "./routers/third-party-map-display";
import Drawing from "./routers/drawing"

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
  MapControls,
  ThirdPartyMapDisplay,
  Drawing
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
