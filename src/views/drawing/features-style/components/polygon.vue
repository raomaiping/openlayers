<template>
  <div class="title">图形样式</div>
  <el-form
    class="polygon"
    label-position="left"
    label-width="150px"
    :model="polygonForm"
    style="max-width: 460px"
    size="small"
  >
    <el-form-item label="填充颜色(color)">
      <el-color-picker v-model="polygonForm.fillColor" show-alpha />
    </el-form-item>
    <el-form-item label="边框颜色(color)">
      <el-color-picker v-model="polygonForm.strokeColor" />
    </el-form-item>
    <el-form-item label="边框宽度(width)">
      <el-input-number v-model="polygonForm.strokeWidth" :min="1" :max="1000" />
    </el-form-item>
  </el-form>
  <div class="title">文字样式</div>
  <textStyle ref="textStyleForm" />
</template>

<script setup>
  import { reactive, ref, defineExpose } from "vue";
  import textStyle from "./text-style.vue";
  const polygonForm = reactive({
    fillColor: "rgba(255, 255, 255, 0.5)",
    strokeColor: "#000000",
    strokeWidth: 2,
  });
  const textStyleForm = ref(null);
  defineExpose({
    getForm: () => ({
      patterningForm: polygonForm,
      textStyleForm: textStyleForm?.value?.textStyleForm || {},
    }),
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
