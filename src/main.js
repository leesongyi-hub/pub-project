import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//전역 컴포넌트
import BasePagination from "./components/common/BasePagination.vue";

//bootstrab
import "jquery";
import "bootstrap";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";

//custom css
import "@/assets/css/tailwind.css";

//custom css
import "@/assets/css/layout.css";

const app = createApp(App)
app.component('BasePagination', BasePagination)

app.use(router)
app.mount('#app')

