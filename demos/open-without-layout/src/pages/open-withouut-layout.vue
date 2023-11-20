<script lang="ts" setup>
import { useRoute } from "vue-router";
import { computed, defineAsyncComponent } from "vue";
const route = useRoute();
const name = computed(() => route.query.name);

const Page = defineAsyncComponent(() => import(`./${name.value}.vue`));
</script>
<template>
  <div>open:{{ name }}</div>
  <Page />
</template>
<style lang="scss" scoped></style>
