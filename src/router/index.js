import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    name: "MainView",
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;