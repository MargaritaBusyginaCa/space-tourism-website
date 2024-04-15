<script setup>
import { ref } from "vue";
const activePlanet = ref(0);
const planets = ref([
  {
    index: 0,
    name: "moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400 km",
    travelTime: "3 days",
  },
  {
    index: 1,
    name: "mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avgDistance: "225 MIL. km",
    travelTime: "9 months",
  },
  {
    index: 2,
    name: "europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 MIL. km",
    travelTime: "3 years",
  },
  {
    index: 3,
    name: "titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 BIL. km",
    travelTime: "7 years",
  },
]);
const switchPlanet = (index) => {
  activePlanet.value = index;
};
</script>

<template>
  <main>
    <p class="size-5"><span>01</span> Pick your destination</p>
    <img
      class="planet-image"
      :src="`/assets/destination/image-${planets[activePlanet].name}.png`"
      :alt="`image of ${planets[activePlanet].name}`"
    />
    <ul>
      <li v-for="(planet, index) in planets" :key="planet.name">
        <button @click="switchPlanet(index)">{{ planet.name }}</button>
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
@import "@/assets/variables.scss";
main {
  height: 100vh;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("/assets/destination/background-destination-tablet.jpg");
  background-repeat: no-repeat;
  span {
    margin-right: 10px;
    color: grey;
  }
  ul {
    padding: 0;
    display: flex;
    list-style-type: none;
    gap: 27px;

    li {
      button {
        border: none;
        background-color: transparent;
        letter-spacing: 2.36px;
        font-weight: 400;
        font-size: 15px;
        font-family: $font_secondary_condensed;
        color: $lavender;
        text-transform: uppercase;
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
