import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import "default-passive-events";
import dialogDrag from '@/directives/dialogDrag'
// element icons
import * as Icons from '@element-plus/icons-vue'
import router from './router'
import '@/style/mobile.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)

// 自定义全局指令，可以在main.js 的app上注册就可以全局使用
app.use(dialogDrag)
// 注册element Icons组件
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key])
})
app.mount('#app')
