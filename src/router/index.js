import { createRouter, createWebHistory } from "vue-router";
import CoverPage from "../views/CoverPage.vue";
import LoginPage from "../views/LoginPage.vue";
import WebPage from "../views/WebPage.vue";
import Checkout from "../views/Checkout.vue";

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
  {
    path: "/Checkout",
    name: "Checkout",
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
