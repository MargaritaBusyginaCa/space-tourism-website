<script setup>
import tech from "./tech.json";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const activeTechnology = ref(
  route.params.name ? route.params.name : tech[0].path
);

const activeTechnologyIndex = computed(() => {
  let index;
  tech.map((technology) => {
    if (technology.path === activeTechnology.value) {
      index = technology.index;
    }
  });
  return index;
});

const switchTechnology = (index) => {
  activeTechnology.value = index;
  router.push(`/technology/${activeTechnology.value}`);
};
</script>

<template>
  <main>
    <div class="col-1">
      <ul>
        <li v-for="(technology, index) in tech" :key="technology.name">
          <button
            @click="switchTechnology(technology.path)"
            :class="index === activeTechnologyIndex ? 'active' : null"
          ></button>
        </li>
      </ul>
      <div class="technology-info">
        <h2 class="tech-title">THE TERMINOLOGY…</h2>
        <h3 class="tech-member">{{ tech[activeTechnologyIndex].name }}</h3>
        <p class="body-text">{{ tech[activeTechnologyIndex].description }}</p>
      </div>
    </div>
    <div class="col-2">
      <h1 class="condensed page-heading"><span>03</span> SPACE LAUNCH 101</h1>
      <img
        :src="`/assets/technology/image-${tech[0].path}-landscape.jpg`"
        alt="technology-vehicle"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/pages/destination/destination.scss";
main {
  background-image: url("/assets/technology/background-technology-tablet.jpg");
  display: flex;
  flex-direction: column;
  justify-content: center;
  .col-1 {
    order: 2;
  }
  .col-2 {
    order: 1;
    .page-heading {
      font-size: 16px;
    }
    img {
      width: 100%;
    }
  }
}
</style>
