<script setup>
import tech from "./tech.json";
import { ref, computed, onMounted, onUnmounted } from "vue";
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

const switchTechnology = (path) => {
  activeTechnology.value = path;
  router.push(`/technology/${activeTechnology.value}`);
};

onMounted(() => {
  window.addEventListener("resize", resizeWindow);
});
onUnmounted(() => {
  window.removeEventListener("resize", resizeWindow);
});
const layout = ref(window.innerWidth > 1100 ? "portrait" : "landscape");
const technologyImage = computed(() => {
  return `/assets/technology/image-${tech[activeTechnologyIndex.value].path}-${
    layout.value
  }.jpg`;
});

function resizeWindow() {
  layout.value = window.innerWidth > 1100 ? "portrait" : "landscape";
}
</script>

<template>
  <main>
    <div class="col-1">
      <ul>
        <li v-for="(technology, index) in tech" :key="technology.name">
          <button
            @click="switchTechnology(technology.path)"
            :class="index === activeTechnologyIndex ? 'active' : null"
          >
            {{ index + 1 }}
          </button>
        </li>
      </ul>
      <div class="tech-info">
        <h2 class="tech-title">THE TERMINOLOGY…</h2>
        <h3 class="tech-name">{{ tech[activeTechnologyIndex].name }}</h3>
        <p class="body-text">{{ tech[activeTechnologyIndex].description }}</p>
      </div>
    </div>
    <div class="col-2">
      <p class="condensed page-heading"><span>03</span> SPACE LAUNCH 101</p>
      <img :src="technologyImage" alt="technology-vehicle" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/pages/destination/destination.scss";
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  .col-1 {
    order: 2;
    ul {
      display: flex;
      gap: 16px;
      padding: 0;
      li {
        list-style: none;
        button {
          padding: 13px 19px;
          border-radius: 50%;
          background-color: $space;
          color: $white;
          font-size: 16px;
          font-family: $font_primary;
          border: 1px solid $white;
          &.active {
            background-color: $white;
            color: $space;
          }
        }
      }
    }
    .tech-info {
      text-align: center;
      .tech-title {
        font-size: 16px;
        letter-spacing: 2.36px;
        font-family: $font_secondary_condensed;
        font-weight: 300;
        color: $lavender;
      }
      .tech-name {
        font-size: 24px;
        color: $white;
        font-style: normal;
        font-weight: 400;
        font-family: $font_primary;
      }
      .body-text {
        padding: 0 20px;
      }
    }
  }
  .col-2 {
    order: 1;
    .page-heading {
      padding-bottom: 32px;
    }
    img {
      width: 100%;
    }
  }
}
// tablets
@media (min-width: 600px) {
  main {
    .col-2 {
      width: 100%;
    }
  }
}
//desktops
@media (min-width: 1100px) {
  main {
    flex-direction: row;
    justify-content: space-around;
    .col-1 {
      order: 1;
      display: flex;
      flex-direction: row;
      gap: 50px;
      ul {
        flex-direction: column;
        li > button {
          padding: 23px 29px;
        }
      }
      .tech-info {
        width: 600px;
        text-align: left;
        .tech-name {
          font-size: 56px;
          margin: 0;
        }
        .body-text {
          padding: 0;
        }
      }
    }
    .col-2 {
      order: 2;
      width: fit-content;
      .page-heading {
        position: absolute;
        left: 7%;
        top: 20%;
      }
      img {
        width: 340px;
      }
    }
  }
}
</style>
