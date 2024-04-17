<script setup>
import { ref } from "vue";
import planets from "@/assets/planets.json";
const activePlanet = ref(0);

const switchPlanet = (index) => {
  activePlanet.value = index;
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
        :src="`/assets/destination/image-${planets[activePlanet].name}.png`"
        :alt="`image of ${planets[activePlanet].name}`"
      />
    </div>
    <div class="col-2">
      <ul>
        <li v-for="(planet, index) in planets" :key="planet.name">
          <button
            @click="switchPlanet(index)"
            :class="index === activePlanet ? 'active' : null"
          >
            {{ planet.name }}
          </button>
        </li>
      </ul>
      <h1>{{ planets[activePlanet].name }}</h1>
      <p class="body-text">{{ planets[activePlanet].description }}</p>
      <hr />
      <div class="travel-info">
        <div>
          <h2 class="condensed">Avg. Distance</h2>
          <p>{{ planets[activePlanet].avgDistance }}</p>
        </div>
        <div>
          <h2 class="condensed">Est. Travel Time</h2>
          <p>{{ planets[activePlanet].travelTime }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/pages/destination.scss";
</style>
