import { createRouter, createWebHistory } from "vue-router";
import CoverPage from "../views/CoverView.vue";
import LoginPage from "../views/LoginView.vue";
import WebPage from "../views/WebView.vue";
import Checkout from "../views/CheckoutView.vue";

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
