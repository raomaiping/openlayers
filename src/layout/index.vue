<template>
  <el-container class="layout-container-demo" style="height: 100%">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu
          active-text-color="#ffd04b"
          background-color="#303133"
          text-color="#fff"
          :default-active="$route.path"
          router
        >
          <el-menu-item index="/home">
            <el-icon><message /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu
            v-for="route in handleRouter(routes)"
            :index="route.path"
            :key="route.path"
          >
            <template #title>
              <el-icon><message /></el-icon>{{ route.title }}
            </template>
            <el-menu-item
              v-for="children in route.children"
              :index="children.path"
              :key="children.path"
            >
              {{ children.title }}
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px"> </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
  import { Message } from "@element-plus/icons-vue";
  import { routes } from "@/router";
  import { handleRouter } from "@/lib";
</script>

<style>
  .layout-container-demo .el-header {
    position: relative;
    background-color: #303133;
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .el-aside {
    color: var(--el-text-color-primary);
    background: #303133;
  }
  .layout-container-demo .el-menu {
    border-right: none;
  }
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
  .main {
    position: relative;
  }
</style>
