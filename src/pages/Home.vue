<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const navigate = () => {
  router.push("/destination");
};
</script>

<template>
  <section class="home-space">
    <div class="space-text">
      <p class="condensed">SO, YOU WANT TO TRAVEL TO</p>
      <h1>SPACE</h1>
      <p class="body-text">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div class="explore-btn">
      <button @click="navigate">EXPLORE</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
.home-space {
  width: 100%;
  height: 100vh;
  background-image: url("/assets/home/background-home-mobile.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 100px;
  .space-text {
    h1 {
      animation-duration: 3s;
      animation-name: colorChange;
      margin: 16px 0;
    }
    .body-text {
      padding: 0 24px;
      font-weight: 100;
    }
  }

  .explore-btn {
    animation-name: slideIn;
    animation-duration: 2s;
    background-color: transparent;
    padding: 40px;
    border-radius: 50%;
    &:hover {
      background-color: rgba(200, 200, 200, 0.264);
    }
    button {
      font-family: $font_primary;
      font-size: 20px;
      letter-spacing: 1.25px;
      border: none;
      padding: 68px 27px 59px 29px;
      border-radius: 50%;
    }
  }
}
//tablets
@media (min-width: 600px) {
  .home-space {
    background-image: url("/assets/home/background-home-tablet.jpg");
    .space-text {
      .condensed {
        margin-top: 50px;
      }
      h1 {
        font-size: 150px;
      }
      .body-text {
        padding: 0px 100px;
      }
    }
    .explore-btn {
      button {
        padding: 100px 48px;
        font-size: 32px;
      }
    }
  }
}

//desktops
@media (min-width: 901px) {
  .home-space {
    background-image: url("/assets/home/background-home-desktop.jpg");
    flex-direction: row;
    align-items: end;
    text-align: left;
    justify-content: space-around;
    .space-text {
      margin-bottom: 200px;
      width: min-content;
      padding-left: 20px;
      .body-text {
        padding: 0;
      }
    }
    .explore-btn {
      margin-bottom: 200px;
    }
  }
}

@keyframes colorChange {
  from {
    color: $space;
  }

  to {
    color: white;
  }
}

@keyframes slideIn {
  from {
    margin-top: 150px;
  }

  to {
    margin-top: 0%;
  }
}
</style>
