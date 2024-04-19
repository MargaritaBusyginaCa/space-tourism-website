import { createRouter, createWebHistory } from "vue-router";
// Lazy load the route components
const Home = () => import("@/pages/Home.vue");
const Destination = () => import("@/pages/Destination.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    redirect: "/destination/moon", // Redirects to a default or specified destination
  },
  {
    path: "/destination/:name",
    name: "Destination",
    component: Destination,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
