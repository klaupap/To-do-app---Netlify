import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import App from "./App.vue";
import router from "./router";
import "bootstrap";

//CSS de Vue - no lo usaré
// import "./assets/main.css";

//Material Icons de Google - mirar si fer servir millor els de Bootstrap
import "material-icons/iconfont/material-icons.css";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPersist);

app.use(pinia);
app.use(router);

app.mount("#app");
