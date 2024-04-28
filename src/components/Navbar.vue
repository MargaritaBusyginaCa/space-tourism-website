<script setup>
import { computed, ref } from "vue";
const links = ref([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Destination",
    path: "/destination/moon",
  },
  {
    name: "Crew",
    path: "/crew",
  },
  {
    name: "Technology",
    path: "/technology",
  },
]);

const showMenu = ref(false);
function toggleMenu() {
  showMenu.value = !showMenu.value;
}
const menuDisplay = computed(() => {
  return showMenu.value ? "flex" : "none";
});
</script>

<template>
  <nav>
    <router-link to="/">
      <img class="logo" src="/assets/shared/logo.svg" alt="our logo"
    /></router-link>
    <button class="hamburger" @click="toggleMenu">
      <img src="/assets/shared/icon-hamburger.svg" alt="hamburger menu" />
    </button>
    <hr />
    <ul>
      <button class="hamburger" @click="toggleMenu">
        <img src="/assets/shared/icon-close.svg" alt="hamburger menu" />
      </button>
      <li v-for="(link, index) in links" :key="link.name">
        <router-link :to="link.path" class="condensed"
          ><span>0{{ index }}</span
          >{{ link.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  .logo {
    height: 40px;
    width: 40px;
  }
  .hamburger {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}
ul {
  display: v-bind(menuDisplay);
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 50%;
  top: 0;
  right: 0;
  z-index: 99;
  text-align: center;
  backdrop-filter: blur(81px);
  li {
    list-style: none;
  }
}
hr {
  display: none;
}
//tablets
@media (min-width: 600px) {
  nav {
    padding: 0;
    width: 100%;
    .logo {
      padding: 24px 39px;
      height: 48px;
      width: 48px;
    }
    .hamburger {
      display: none;
    }
    ul {
      display: flex;
      flex-direction: row;
      position: unset;
      height: auto;
      list-style-type: none;
      gap: 37px;
      background-color: rgba(56, 56, 56, 0.269);
      margin: 0;
      padding: 39px 48px;
      a {
        color: $white;
        text-decoration: none;
        font-size: 14px;
      }
      span {
        display: none;
      }
    }
  }
}

//desktops
@media (min-width: 901px) {
  nav {
    ul {
      padding: 39px 100px;
      span {
        display: unset;
      }
    }
    hr {
      display: unset;
      width: 100%;
      opacity: 0.2;
      z-index: 100;
      margin-right: -20px;
    }
  }
}
</style>
