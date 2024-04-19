<script setup>
import { computed, ref } from "vue";
import planets from "@/pages/destination/planets.json";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const activePlanet = ref(route.params.name ? route.params.name : "moon");

const activePlanetIndex = computed(() => {
  let index;
  planets.map((planet) => {
    if (planet.name === activePlanet.value) {
      index = planet.index;
    }
  });
  return index;
});

const switchPlanet = (index) => {
  activePlanet.value = index;
  router.push(`/destination/${activePlanet.value}`);
};
</script>

<template>
  <main>
    <div class="col-1">
      <p class="condensed page-heading">
        <span>01</span> Pick your destination
      </p>
      <img
        class="planet-image"
        :src="`/assets/destination/image-${activePlanet}.png`"
        :alt="`image of ${activePlanet}`"
      />
    </div>
    <div class="col-2">
      <ul>
        <li v-for="(planet, index) in planets" :key="planet.name">
          <button
            @click="switchPlanet(planet.name)"
            :class="index === activePlanetIndex ? 'active' : null"
          >
            {{ planet.name }}
          </button>
        </li>
      </ul>
      <h1>{{ activePlanet }}</h1>
      <p class="body-text">{{ planets[activePlanetIndex]?.description }}</p>
      <hr />
      <div class="travel-info">
        <div>
          <h2 class="condensed">Avg. Distance</h2>
          <p>{{ planets[activePlanetIndex]?.avgDistance }}</p>
        </div>
        <div>
          <h2 class="condensed">Est. Travel Time</h2>
          <p>{{ planets[activePlanetIndex]?.travelTime }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/pages/destination/destination.scss";
</style>
