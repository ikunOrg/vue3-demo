import { Fragment, defineComponent, ref, VNodeChild, h } from "vue";
import { Button } from "ant-design-vue";
import styles from "./helloworld.module.scss";

const HelloWorld = defineComponent({
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { msg } = props;
    const count = ref(0);

    const rednerButton = () => {
      const res: VNodeChild[] = [];
      for (let i = 0; i < 3; i++) {
        res.push(
          h(
            Button,
            {
              type: "primary",
              onClick: () => count.value++,
            },
            () => `count is ${count.value}`
          )
        );
      }

      return res;
    };

    return () => (
      <Fragment>
        <h1>{{ msg }}</h1>

        <div class="card">
          {rednerButton()}
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>

        <p>
          Check out
          <a
            href="https://vuejs.org/guide/quick-start.html#local"
            target="_blank"
          >
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
        <p class={styles["read-the-docs"]}>
          Click on the Vite and Vue logos to learn more
        </p>
      </Fragment>
    );
  },
});

export default HelloWorld;
