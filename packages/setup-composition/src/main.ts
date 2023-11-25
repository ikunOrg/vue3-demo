import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import UI from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import * as Ikun from "@ikunorg/vue";
console.log("Ikun", Ikun);

createApp(App).use(UI).use(Ikun).mount("#app");
