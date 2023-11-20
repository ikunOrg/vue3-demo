import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import UI from "element-plus";
import "element-plus/dist/index.css";
import routers from "./routers";

const app = createApp(App);

app.use(UI);
app.use(routers);
app.mount("#app");
