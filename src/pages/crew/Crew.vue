<script setup>
import crew from "@/pages/crew/crew.json";
import { ref } from "vue";
const activeMember = ref(0);
</script>

<template>
  <main>
    <div class="col-1">
      <h1 class="condensed"><span>02</span> Meet your crew</h1>
      <div class="crew-info">
        <h2 class="crew-title">{{ crew[activeMember].title }}</h2>
        <h3 class="crew-member">{{ crew[activeMember].fullName }}</h3>
        <p class="crew-details">{{ crew[activeMember].description }}</p>
      </div>
      <ul>
        <li><button></button></li>
      </ul>
    </div>
    <div class="col-2">
      <img
        :src="`/assets/crew/image-${crew[activeMember].path}.png`"
        :alt="`picture of ${crew[activeMember].fullName}`"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
