<template>
  <div class="tool-bar" v-dialogDrag="true" style="left: 20px; top: 20px">
    <div class="tool-bar-header dialog-drag-header">要素样式</div>
    <div class="tool-bar-content">
      <div class="tabs">
        <div
          :class="['tabs-item', { active: state.active === item.value }]"
          v-for="item in state.tabs"
          :key="item.name"
          @click="handleMenu(item.value)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="tab-content">
        <button @click="handleUpdate">更新</button>
        <keep-alive :max="state.max">
          <component :is="state.component" ref="form"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, markRaw, ref, defineEmits } from 'vue'
/* eslint-disable no-unused-vars */
import point from './point.vue'
import line from './line.vue'
import polygon from './polygon.vue'
const emit = defineEmits(['handleUpdate'])

const state = reactive({
  tabs: [
    {
      name: '点要素样式',
      value: 'point',
    },
    {
      name: '线要素样式',
      value: 'line',
    },
    {
      name: '区要素样式',
      value: 'polygon',
    },
  ],
  active: 'point',
  component: null,
  include: ['point', 'line', 'polygon'],
  max: 0,
})
const form = ref(null)
const handleUpdate = () => {
  emit('handleUpdate', state.active, { ...form.value.getForm() })
}
const handleMenu = (active) => {
  const lookup = {
    point,
    line,
    polygon,
  }
  state.active = active
  state.component = markRaw(lookup[active])
}
handleMenu(state.active)
// 设置最大缓存组件数为三个
state.max = 3
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tool-bar {
  position: absolute;
  width: 400px;
  height: 560px;
  padding: 10px;
  box-shadow: 0 0 10px #000;
  background: linear-gradient(to bottom, #eff5ff 0, #e0ecff 20%);
  border-radius: 10px;
}
.tool-bar-header {
  height: 32px;
  line-height: 32px;
  font-weight: bold;
  font-size: 16px;
  color: #303133;
}
.tool-bar-content {
  position: relative;
  border: 1px solid #95b8e7;
  height: calc(100% - 52px);
  background: #fff;
  display: flex;
  padding: 10px;
}
.tabs {
  position: absolute;
  left: 10px;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  padding: 10px 0;
  box-sizing: border-box;
}
.tabs-item {
  width: 20px;
  padding: 10px;
  border: 1px solid #95b8e7;
  border-right: none;
  background: linear-gradient(to bottom, #eff5ff 0, #e0ecff 20%);
  border-radius: 5px 0 0 5px;
  cursor: pointer;
}
.tabs-item.active {
  font-weight: bold;
}
.tab-content {
  width: calc(100% - 40px);
  margin-left: 40px;
  border: 1px solid #95b8e7;
  padding: 10px;
}
:deep(.title) {
  color: red;
  font-weight: bold;
}
:deep(.el-form-item--small) {
  margin-bottom: 4px;
}
button {
  cursor: pointer;
}
</style>
