import { createWebHashHistory, createRouter } from "vue-router";
import MainPage from "../views/MainView.vue";
import SearchResult from "../views/SearchView.vue";
import testView from "../views/testView.vue";
import ModalView from "../views/ModalView.vue";

const routes = [
  {
    path: '/',
    redirect: '/main',
  },
  {
    path: "/main",
    name: "MainView",
    component: MainPage,
    meta: {
      title : 'OKMS | 메인'
    }
  },
  {
    path: "/search",
    name: "SearchResult",
    component: SearchResult,
    meta: {
      title : 'OKMS | 통합검색'
    }
  },
  {
    path: "/test",
    name: "testView",
    component: testView,
  },
  {
    path: "/modal",
    name: "ModalView",
    component: ModalView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  const title = to.meta.title || 'OKMS';
  document.title = title;
});

export default router;