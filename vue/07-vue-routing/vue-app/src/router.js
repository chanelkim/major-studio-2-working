import * as VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Methodology from "./components/Methodology.vue";
import NewPage from "./components/NewPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/methodology", component: Methodology },
  { path: "/newpage", component: NewPage },
];
export const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
