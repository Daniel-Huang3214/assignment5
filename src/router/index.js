import { createRouter, createWebHistory } from "vue-router";
import CoverPage from "../views/CoverPage.vue";
import LoginPage from "../views/LoginPage.vue";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
