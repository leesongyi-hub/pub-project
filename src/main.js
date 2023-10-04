import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "jquery";
import "bootstrap";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "./assets/css/layout.css";

const app = createApp(App)

app.use(router).mount('#app')
