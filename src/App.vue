<template>
  <router-view></router-view>
</template>

<script setup>
  import warterMark from "@/lib/warterMark";
  import { onMounted } from "vue";
  import { AUTHOR_INFO } from "@/constants";
  import ResizeHandler from "@/hooks/ResizeHandler";
  ResizeHandler();
  onMounted(() => {
    const { NAME, QQ, WX } = AUTHOR_INFO;
    warterMark.set(`${NAME} QQ:${QQ} WX:${WX}`);
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
  a {
    text-decoration: none;
  }
</style>
