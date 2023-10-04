import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../views/MainView.vue";
import SearchResult from "../views/SearchView.vue";
import TempDetail from "../views/modal/TempDetail.vue";

const routes = [
  {
    path: "/",
    name: "MainView",
    component: MainPage,
  },
  {
    path: "/search",
    name: "SearchResult",
    component: SearchResult,
  },
  {
    path: "/modal/template_detail",
    name: "TempDetail",
    component: TempDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;