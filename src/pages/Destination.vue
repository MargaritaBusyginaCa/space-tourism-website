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
    <p class="size-5 page-heading"><span>01</span> Pick your destination</p>
    <img
      class="planet-image"
      :src="`/assets/destination/image-${planets[activePlanet].name}.png`"
      :alt="`image of ${planets[activePlanet].name}`"
    />
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
        <h2 class="size-5">Avg. Distance</h2>
        <p>{{ planets[activePlanet].avgDistance }}</p>
      </div>
      <div>
        <h2 class="size-5">Est. Travel Time</h2>
        <p>{{ planets[activePlanet].travelTime }}</p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
main {
  height: 100vh;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("/assets/destination/background-destination-tablet.jpg");
  background-repeat: no-repeat;
  .page-heading {
    margin-top: 40px;
    span {
      margin-right: 10px;
      color: grey;
      font-weight: 600;
    }
  }

  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    gap: 27px;

    li {
      button {
        border: none;
        padding: 10px 0;
        background-color: transparent;
        letter-spacing: 2.36px;
        font-weight: 400;
        font-size: 15px;
        font-family: $font_secondary_condensed;
        color: $lavender;
        text-transform: uppercase;
        &.active {
          border-bottom: 3px solid $white;
        }
      }
    }
  }
  .planet-image {
    height: 170px;
    width: 170px;
    margin: 30px 0;
  }
  h1 {
    text-transform: uppercase;
    font-size: 62px;
    margin-top: 20px;
  }
  .body-text {
    height: 150px;
  }
  hr {
    width: 100%;
    opacity: 0.2;
    margin-bottom: 32px;
  }
  .travel-info {
    p {
      text-transform: uppercase;
      font-size: 28px;
      margin-top: 12px;
    }
  }
}
</style>
