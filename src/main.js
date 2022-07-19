import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// import "default-passive-events";
import dialogDrag from "@/directives/dialogDrag";
import router from "./router";
const app = createApp(App);

app.use(ElementPlus);
app.use(router);

// 自定义全局指令，可以在main.js 的app上注册就可以全局使用
app.use(dialogDrag);

app.mount("#app");
