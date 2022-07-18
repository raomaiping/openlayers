<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
  import warterMark from "@/lib/warterMark";
  import { onMounted } from "vue";
  import { AUTHOR } from "@/constants";
  onMounted(() => {
    warterMark.set(AUTHOR);
  });
</script>

<style>
  * {
    touch-action: none;
    margin: 0;
    padding: 0;
  }
  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }
</style>
