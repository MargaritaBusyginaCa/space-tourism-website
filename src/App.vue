<script setup>
import { useRoute } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { watchEffect, computed, ref } from "vue";

const route = useRoute();
const currentRoute = ref(route.name);

watchEffect(() => {
  currentRoute.value = route.name;
});

const appClass = computed(() => {
  switch (currentRoute.value) {
    case "Home":
      return "home";
    case "Destination":
      return "destination";
    case "Crew":
      return "crew";
    case "Technology":
      return "technology";
    default:
      return "home";
  }
});
</script>

<template>
  <div :class="['app', appClass]">
    <Navbar />
    <RouterView />
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/global.scss";
.home {
  background-image: url("/assets/home/background-home-mobile.jpg");
  background-size: cover;
}
.destination {
  background-image: url("/assets/destination/background-destination-tablet.jpg");
}
.crew {
  background-image: url("/assets/crew/background-crew-tablet.jpg");
}
.technology {
  background-image: url("/assets/technology/background-technology-tablet.jpg");
}
//tablets
@media (min-width: 600px) {
  .home {
    background-image: url("/assets/home/background-home-tablet.jpg");
  }
  .destination {
    background-image: url("/assets/destination/background-destination-desktop.jpg");
    background-repeat: round;
  }
}
//desktops
@media (min-width: 901px) {
  .home {
    background-image: url("/assets/home/background-home-desktop.jpg");
  }
  .crew {
    background-image: url("/assets/crew/background-crew-desktop.jpg");
    background-repeat: round;
  }
  .technology {
    background-image: url("/assets/technology/background-technology-desktop.jpg");
  }
}
</style>
