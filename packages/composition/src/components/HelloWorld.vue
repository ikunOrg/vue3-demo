<script lang="ts">
import { Button } from "ant-design-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    Button,
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup() {
    const count = ref(0);

    return {
      count,
    };
  },
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <template v-for="index in 3" :key="index">
      <Button type="primary" @click="count++">count is {{ count }}</Button>
    </template>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
