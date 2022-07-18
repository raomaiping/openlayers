<template>
  <el-form
    class="line"
    label-position="left"
    label-width="150px"
    :model="textStyleForm"
    style="max-width: 460px"
    size="small"
  >
    <el-form-item label="位置(align)">
      <el-select v-model="textStyleForm.align">
        <el-option
          v-for="item in options.textAlignOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="基线(baseline)">
      <el-select v-model="textStyleForm.baseline">
        <el-option
          v-for="item in options.baselineOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="旋转角度(rotation)">
      <el-select v-model="textStyleForm.rotation">
        <el-option
          v-for="item in options.rotationOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="字体(font)">
      <el-select v-model="textStyleForm.fontStyle">
        <el-option
          v-for="item in options.fontStyleOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="字体粗细(weight)">
      <el-select v-model="textStyleForm.fontWeight">
        <el-option
          v-for="item in options.fontWeightOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-form-item>
    <el-form-item label="字体大小(size)">
      <el-input-number v-model="textStyleForm.fontSize" :min="1" :max="1000" />
    </el-form-item>
    <el-form-item label="X偏移量(offset x)">
      <el-input-number v-model="textStyleForm.offsetX" :min="0" :max="1000" />
    </el-form-item>
    <el-form-item label="Y偏移量(offset y)">
      <el-input-number v-model="textStyleForm.offsetY" :min="0" :max="1000" />
    </el-form-item>
    <el-form-item label="字体颜色(color)">
      <el-color-picker v-model="textStyleForm.fillColor" />
    </el-form-item>
    <el-form-item label="文字外框颜色(O.Color)">
      <el-color-picker v-model="textStyleForm.outlineColor" show-alpha />
    </el-form-item>
    <el-form-item label="文字外框宽度(O.Width)">
      <el-input-number
        v-model="textStyleForm.outlineWidth"
        :min="1"
        :max="1000"
      />
    </el-form-item>
  </el-form>
</template>

<script setup>
  import { reactive, defineExpose } from "vue";
  import {
    textAlignOptions,
    baselineOptions,
    rotationOptions,
    fontStyleOptions,
    fontWeightOptions,
  } from "../js/data";
  const textStyleForm = reactive({
    align: "center", // 位置
    baseline: "middle", // 基线
    rotation: 0, // 旋转角度
    fontStyle: "Arial", // 字体
    fontWeight: "normal", // 字体粗细
    fontSize: 12, // 字体大小
    offsetX: 0, // X偏移量
    offsetY: 0, // Y偏移量
    fillColor: "#066AF5", // 字体颜色
    outlineColor: "#fff", // 文字外框颜色
    outlineWidth: 3, // 文字外框宽度
  });
  const options = reactive({
    textAlignOptions,
    baselineOptions,
    rotationOptions,
    fontStyleOptions,
    fontWeightOptions,
  });
  defineExpose({
    textStyleForm: textStyleForm,
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
