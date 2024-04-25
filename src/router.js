import { createRouter, createWebHistory } from "vue-router";
import crew from "@/pages/crew/crew.json";
import tech from "@/pages/tech/tech.json";
// Lazy load the route components
const Home = () => import("@/pages/Home.vue");
const Destination = () => import("@/pages/destination/Destination.vue");
const Crew = () => import("@/pages/crew/Crew.vue");
const Technology = () => import("@/pages/tech/Technology.vue");

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
    redirect: `/crew/${crew[0].path}`,
  },
  {
    path: "/crew/:name",
    name: "Crew",
    component: Crew,
  },
  {
    path: "/technology",
    redirect: `/technology/${tech[0].path}`,
  },
  {
    path: "/technology/:name",
    name: "Technology",
    component: Technology,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
