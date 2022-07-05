import { createRouter, createWebHashHistory } from "vue-router";
import layout from "@/layout";
import mapControls from './routers/map-controls'
import thirdPartyMapDisplay from "./routers/third-party-map-display";

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
  mapControls,
  thirdPartyMapDisplay
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
