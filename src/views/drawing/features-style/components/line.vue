<template>
  <div class="title">图形样式</div>
  <el-form
    class="line"
    label-position="left"
    label-width="150px"
    :model="lineForm"
    style="max-width: 460px"
    size="small"
  >
    <el-form-item label="线颜色(color)">
      <el-color-picker v-model="lineForm.strokeColor" show-alpha />
    </el-form-item>
    <el-form-item label="线宽(width)">
      <el-input-number v-model="lineForm.strokeWidth" :min="1" :max="1000" />
    </el-form-item>
  </el-form>
  <div class="title">文字样式</div>
  <textStyle ref="textStyleForm" />
</template>

<script setup>
  import { reactive, ref, defineExpose } from "vue";
  import textStyle from "./text-style.vue";
  const lineForm = reactive({
    strokeColor: "green",
    strokeWidth: 2,
  });
  const textStyleForm = ref(null);
  defineExpose({
    getForm: () => ({
      patterningForm: lineForm,
      textStyleForm: textStyleForm?.value?.textStyleForm || {},
    }),
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
