<template>
  <el-container class="layout">
    <el-header class="header">Header</el-header>
    <el-container class="main">
      <el-aside width="200px" class="aside">Aside</el-aside>
      <el-main class="content">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "BaseForm",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.layout {
  .header {
  }

  .main {
    .aside {
    }
    .content {
    }
  }
}
</style>