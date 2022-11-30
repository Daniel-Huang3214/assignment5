import { createRouter, createWebHistory } from "vue-router";
import CoverPage from "../views/CoverPage.vue";

const routes = [
    {
      path: '/',
      component: CoverPage
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;