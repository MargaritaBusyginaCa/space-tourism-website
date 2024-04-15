import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Destination from "@/pages/Destination.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination",
    name: "Destination",
    component: Destination,
  },
  //   {
  //     path: "/slideshow/:name",
  //     name: "Slideshow",
  //     component: Slideshow,
  //   },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
