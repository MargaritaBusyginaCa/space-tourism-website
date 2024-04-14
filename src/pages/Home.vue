<script setup></script>

<template>
  <section class="home-space">
    <div class="space-text">
      <p class="size-5">SO, YOU WANT TO TRAVEL TO</p>
      <h1>SPACE</h1>
      <p class="body-text">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </div>
    <div class="explore-btn">
      <button>EXPLORE</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/variables.scss";
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
