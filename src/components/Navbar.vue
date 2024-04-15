<script setup>
import { ref } from "vue";
const links = ref([
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Destination",
    path: "/destination",
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
</script>

<template>
  <nav>
    <router-link to="/">
      <img class="logo" src="/assets/shared/logo.svg" alt="our logo"
    /></router-link>
    <div class="hamburger">
      <img src="/assets/shared/icon-hamburger.svg" alt="hamburger menu" />
    </div>
    <hr />
    <ul class="navigator">
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
  position: absolute;
  width: calc(100% - 24px * 2);

  .logo {
    height: 40px;
    width: 40px;
  }
}
ul {
  display: none;
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
    margin: 20px 0;
    ul {
      padding: 39px 100px;
      span {
        display: unset;
        margin-right: 10px;
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
