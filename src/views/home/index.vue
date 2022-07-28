<template>
  <div class="home">
    <el-avatar :size="100" :src="AUTHOR_INFO.AVATAR" />
    <div class="name">{{ AUTHOR_INFO.NAME }}</div>
    <div>性别： {{ AUTHOR_INFO.SEX }}</div>
    <div>年龄：{{ AUTHOR_INFO.AGE }}</div>
    <div>坐标：{{ AUTHOR_INFO.LOCATION }}</div>
    <div>毕业于：{{ AUTHOR_INFO.SCHOOL }}</div>
    <div>WX：{{ AUTHOR_INFO.WX }}</div>
    <div>QQ：{{ AUTHOR_INFO.QQ }}</div>
    <div v-if="IS_JOB_SEARCH">
      简历：<span
        class="resume"
        @click="
          downloadFile(AUTHOR_INFO.RESUME.URL, AUTHOR_INFO.RESUME.FILENAME)
        "
        >下载简历</span
      >
    </div>
    <div>
      社交账号：
      <a :href="AUTHOR_INFO.JUEJIN" target="_blank">掘金</a>、
      <a :href="AUTHOR_INFO.GITHB" target="_blank">GitHb</a>
    </div>
    <div>
      简介：{{
        IS_JOB_SEARCH ? AUTHOR_INFO.JOB_DESCRIPTION : AUTHOR_INFO.DESCRIPTION
      }}
    </div>
  </div>
</template>

<script setup>
  import { AUTHOR_INFO, IS_JOB_SEARCH } from "@/constants";
  import { downloadFile } from "@/lib";
</script>

<style scoped>
  .home {
    width: 100%;
    height: 100%;
    background: url("~@/assets/home.jpg") no-repeat center center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .name {
    font-size: 24px;
    font-weight: bold;
  }
  .home div {
    margin: 10px 0;
  }
  .resume {
    cursor: pointer;
  }
  a {
    color: #fff;
  }
  a:hover,
  .resume:hover {
    color: #409eff;
  }
  .mobile a,
  .mobile .resume {
    color: #409eff;
  }
</style>
