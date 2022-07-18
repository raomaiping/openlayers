<template>
  <div class="title">图形样式</div>
  <el-form
    class="point"
    label-position="left"
    label-width="150px"
    :model="pointForm"
    style="max-width: 460px"
    size="small"
  >
    <el-form-item label="点大小(radius)">
      <el-input-number v-model="pointForm.radius" :min="1" :max="1000" />
    </el-form-item>
    <el-form-item label="填充颜色(color)">
      <el-color-picker v-model="pointForm.fillColor" show-alpha />
    </el-form-item>
    <el-form-item label="边框样式(color)">
      <el-color-picker v-model="pointForm.strokeColor" show-alpha />
    </el-form-item>
    <el-form-item label="边框样式(width)">
      <el-input-number v-model="pointForm.strokeWidth" :min="1" :max="1000" />
    </el-form-item>
  </el-form>
  <div class="title">文字样式</div>
  <textStyle ref="textStyleForm" />
</template>

<script setup>
  import { reactive, ref, defineExpose } from "vue";
  import textStyle from "./text-style.vue";
  const pointForm = reactive({
    radius: 10,
    fillColor: "#aa3300",
    strokeColor: "red",
    strokeWidth: 2,
  });
  const textStyleForm = ref(null);
  defineExpose({
    getForm: () => ({
      patterningForm: pointForm,
      textStyleForm: textStyleForm?.value?.textStyleForm || {},
    }),
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
