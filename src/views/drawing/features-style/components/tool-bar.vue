<template>
  <div class="tool-bar" v-dialogDrag="true" style="left: 20px; top: 20px"></div>
</template>

<script setup></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tool-bar {
    position: absolute;
    width: 400px;
    height: 600px;
    border: 1px solid red;
    background: #fff;
  }
</style>
