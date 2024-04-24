<script setup>
import crew from "@/pages/crew/crew.json";
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const activeMember = ref(route.params.name ? route.params.name : crew[0].path);

const activeMemberIndex = computed(() => {
  let index;
  crew.map((member) => {
    if (member.path === activeMember.value) {
      index = member.index;
    }
  });
  return index;
});

const switchMember = (index) => {
  activeMember.value = index;
  router.push(`/crew/${activeMember.value}`);
};
</script>

<template>
  <main>
    <div class="col-1">
      <h1 class="condensed page-heading"><span>02</span> Meet your crew</h1>
      <ul>
        <li v-for="(member, index) in crew" :key="member.name">
          <button
            @click="switchMember(member.path)"
            :class="index === activeMemberIndex ? 'active' : null"
          />
        </li>
      </ul>
      <div class="crew-info">
        <h2 class="crew-title">{{ crew[activeMemberIndex].title }}</h2>
        <h3 class="crew-member">{{ crew[activeMemberIndex].fullName }}</h3>
        <p class="body-text">{{ crew[activeMemberIndex].description }}</p>
      </div>
    </div>
    <div class="col-2">
      <img
        class="crew-member-img"
        :src="`/assets/crew/image-${crew[activeMemberIndex].path}.png`"
        :alt="`picture of ${crew[activeMemberIndex].fullName}`"
      />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/pages/destination/destination.scss";
main {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  background-image: url("/assets/crew/background-crew-tablet.jpg");
  gap: 20px;
  .col-1 {
    order: 2;
    .page-heading {
      font-size: 18px;
      margin-left: 0;
      position: absolute;
      top: 10%;
      span {
        color: grey;
        margin-right: 8px;
        font-weight: 600;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      justify-content: center;
      gap: 20px;
      padding: 0;
      li {
        button {
          border-radius: 50%;
          padding: 6px;
          border: none;
          background-color: #5f5f5f;
          &.active {
            background-color: $white;
          }
          &:hover {
            background-color: #979797;
          }
        }
      }
    }
    .crew-info {
      text-align: center;
      h2,
      h3 {
        text-transform: uppercase;
        font-style: normal;
        font-weight: 400;
        font-family: $font_primary;
      }
      h2 {
        font-size: 16px;
        opacity: 0.5;
        margin-top: 0;
      }
      h3 {
        margin: 0;
        font-size: 24px;
      }
      .body-text {
        margin: 0;
        padding: 0 20px;
      }
    }
  }
  .col-2 {
    order: 1;
    width: 90%;
    border-bottom: 1px solid rgba(128, 128, 128, 0.252);
    display: flex;
    flex-direction: column;
    align-items: center;

    .crew-member-img {
      height: 323px;
    }
  }
}
// tablets
@media (min-width: 600px) {
  main {
    justify-content: flex-end;

    .col-1 {
      order: 1;
      .page-heading {
        position: unset;
        padding: 0;
      }
      ul {
        order: 2;
      }
      .crew-info {
        .body-text {
          width: 70%;
          margin: 0 auto;
        }
      }
    }
    .col-2 {
      order: 2;
      border: none;

      .crew-member-img {
        height: 532px;
      }
    }
  }
}
//desktops
@media (min-width: 1101px) {
  main {
    background-image: url("/assets/crew/background-crew-desktop.jpg");
    display: grid;
    grid-template-columns: repeat(2, 45%);

    .col-1 {
      align-items: flex-start;
      padding-bottom: 100px;
      .page-heading {
        align-self: flex-start;
        font-size: 28px;
        letter-spacing: 4.72px;
        padding-bottom: 100px;
      }
      ul {
        position: absolute;
        bottom: 100px;
        li > button {
          padding: 7px;
        }
      }
      .crew-info {
        text-align: left;
        h2 {
          font-size: 32px;
          margin-bottom: 0;
        }
        h3 {
          font-size: 56px;
        }
        .body-text {
          width: 100%;
          margin: 0;
          padding: 0;
        }
      }
    }
    .col-2 {
      align-self: flex-end;
      .crew-member-img {
        height: unset;
      }
    }
  }
}
</style>
