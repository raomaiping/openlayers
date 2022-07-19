<template>
  <el-container class="layout-container" style="height: 100%">
    <el-aside>
      <el-scrollbar class="menu">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#303133"
          text-color="#fff"
          :default-active="$route.path"
          :collapse="isCollapse"
          router
          class="el-menu-vertical"
        >
          <el-menu-item index="/home">
            <el-icon><HomeFilled /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu
            v-for="route in handleRouter(routes)"
            :index="route.path"
            :key="route.path"
          >
            <template #title>
              <el-icon v-if="route.icon"
                ><component :is="route.icon"></component></el-icon
              ><span>{{ route.title }}</span>
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
      <div class="collapse" @click="handleCollapse">
        <el-icon color="#fff" v-if="!isCollapse"><Fold /></el-icon>
        <el-icon color="#fff" v-else><Expand /></el-icon>
      </div>
    </el-aside>

    <el-container>
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(v, i) in breadcrumbList" :key="i">
            <span>{{ v.name }}</span>
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="user">
          <span>{{ AUTHOR_INFO.NAME }}</span>
          <el-dropdown>
            <span>
              <el-avatar :size="40" :src="AUTHOR_INFO.AVATAR" />
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  ><el-icon><Link /></el-icon>
                  <a
                    href="https://github.com/raomaiping/openlayers"
                    target="_blank"
                    >GitHb</a
                  ></el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
  import { ref, computed } from "vue";
  import { routes } from "@/router";
  import { handleRouter } from "@/lib";
  import { useRouter } from "vue-router";
  import { AUTHOR_INFO } from "@/constants";
  const isCollapse = ref(false);
  const router = useRouter();
  const breadcrumbList = computed(() => {
    const { matched, name } = router.currentRoute.value;
    if (name == "Home") return [];
    return matched.map((item) => ({
      name: item.meta.title,
    }));
  });
  const handleCollapse = () => {
    isCollapse.value = !isCollapse.value;
  };
</script>

<style>
  .layout-container .el-header {
    position: relative;
    background-color: #303133;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .layout-container .el-aside {
    width: auto;
    background: #303133;
    color: #fff;
  }
  .layout-container .el-menu {
    border-right: none;
  }
  .layout-container .el-main {
    padding: 0;
  }
  .layout-container .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
  .main {
    position: relative;
    overflow: hidden;
  }
  .collapse {
    height: 60px;
    text-align: center;
    line-height: 60px;
  }
  .menu {
    height: calc(100% - 60px);
    color: #fff;
  }
  .el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner,
  .el-breadcrumb__inner,
  .el-breadcrumb__inner a,
  .el-breadcrumb__inner.is-link {
    color: #fff;
  }
  .user {
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 10px;
    color: #fff;
    font-size: 16px;
  }
</style>
