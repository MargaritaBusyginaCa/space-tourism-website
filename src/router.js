import { createRouter, createWebHistory } from "vue-router";
// Lazy load the route components
const Home = () => import("@/pages/Home.vue");
const Destination = () => import("@/pages/destination/Destination.vue");
const Crew = () => import("@/pages/crew/Crew.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    redirect: "/destination/moon",
  },
  {
    path: "/destination/:name",
    name: "Destination",
    component: Destination,
  },
  {
    path: "/crew",
    name: "Crew",
    component: Crew,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
