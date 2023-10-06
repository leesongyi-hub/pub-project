import { createWebHashHistory, createRouter } from "vue-router";
import MainPage from "../views/MainView.vue";
import SearchResult from "../views/SearchView.vue";
import TempDetail from "../views/modal/TempDetail.vue";
import PubList from "../views/PubList.vue";

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
  {
    path: "/pub_list",
    name: "PubList",
    component: PubList,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;