import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/schedule/:id",
    name: "Schedule",
    component: () => import("@/components/SchedulePage.vue"),
  },
  {
    path: "/filters",
    name: "Filters",
    component: () => import("@/components/FiltersPage.vue"),
  },
  {
    path: "/add",
    name: "add",
    component: () => import("@/components/AddEditPage.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
