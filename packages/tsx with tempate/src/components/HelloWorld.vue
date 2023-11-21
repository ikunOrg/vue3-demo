<script lang="tsx" setup>
import { Button } from "ant-design-vue";
import { ref } from "vue";
defineProps<{ msg: string }>();

const count = ref(0);

const VButton = () => {
  return (
    <Button type="primary" onClick={() => count.value++}>
      count is {count.value}
    </Button>
  );
};
</script>

<template>
  <h1>{props.msg}</h1>
  <div class="card">
    <template v-for="index in 3" :key="index">
      <VButton />
    </template>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">
      create-vue
    </a>
    , the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">
      Volar
    </a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
