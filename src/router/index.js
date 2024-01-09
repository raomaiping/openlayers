import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '@/layout'
import MapControls from './routers/map-controls'
import ThirdPartyMapDisplay from './routers/third-party-map-display'
import Drawing from './routers/drawing'
import MapMarker from './routers/map-marker'
import Others from './routers/others'
import { AUTHOR_INFO } from '@/constants'

export const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: layout,
    meta: { title: '首页' },
    children: [
      {
        path: '',
        name: 'Home',
        meta: { title: '首页' },
        component: () => import('@/views/home'),
      },
    ],
  },
  MapControls,
  ThirdPartyMapDisplay,
  Drawing,
  MapMarker,
  Others,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
router.beforeEach(async (to) => {
  const { meta } = to
  document.title = `${AUTHOR_INFO.NAME}-${meta.title}`
})
export default router
