<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
  import warterMark from "@/lib/warterMark";
  import { onMounted } from "vue";

  onMounted(() => {
    warterMark.set("前端小菜鸟吖 QQ:2582395486");
  });
</script>

<style>
  * {
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
