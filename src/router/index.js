import { createWebHashHistory, createRouter } from "vue-router";
import MainPage from "../views/MainView.vue";
import SearchResult from "../views/SearchView.vue";
import SearchLoading from "../views/SearchLoadingView.vue";
import ModalView from "../views/ModalView.vue";
import DocumentPage from "../views/DocumentView.vue";

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
    path: "/search-loading",
    name: "SearchLoading",
    component: SearchLoading,
    meta: {
      title : 'OKMS | 통합검색'
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
    path: "/modal",
    name: "ModalView",
    component: ModalView,
  },
  {
    path: "/document",
    name: "DocumentView",
    component: DocumentPage,
    meta: {
      title : 'OKMS | 문서'
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const targetId = to.hash.substr(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const offset = 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;

        return {
          top: targetPosition,
          behavior: 'smooth',
        };
      }
    } else if (to.name === 'DocumentView') {
      // DocumentView 페이지일 때만 상단 여백 추가
      return {
        top: 100,
        behavior: 'smooth',
      };
    }
  }
});

router.afterEach((to) => {
  const title = to.meta.title || 'OKMS';
  document.title = title;
});

export default router;