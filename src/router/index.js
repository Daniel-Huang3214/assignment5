import { createRouter, createWebHistory } from "vue-router";
import CoverPage from "../views/CoverPage.vue";
import LoginPage from "../views/LoginPage.vue";
import WebPage from "../views/WebPage.vue";

const routes = [
  {
    path: "/",
    component: CoverPage,
  },
  {
    path: "/LoginPage",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/WebPage",
    name: "Website",
    component: WebPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
