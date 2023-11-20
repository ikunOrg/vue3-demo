<script lang="ts" setup>
import { useRouter } from "vue-router";
const router = useRouter();
const handleGoto = () => {
  console.log("handleGoto");

  router.push({
    name: "open",
    query: {
      name: "home",
    },
  });
};
</script>
<template>
  <div>home</div>
  <el-button @click="handleGoto">goto open</el-button>
</template>
<style lang="scss" scoped></style>
