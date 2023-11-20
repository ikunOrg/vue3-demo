<script lang="ts" setup>
// # config import
// # base state
// # pinia
// # computed
// # watch
// # function
// # lifecycle
// # style
</script>
<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss" scoped></style>
