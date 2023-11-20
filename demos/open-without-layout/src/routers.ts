import { createRouter, createWebHistory } from "vue-router";
import LayoutVue from "./Layout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: LayoutVue,
      redirect: "/main/home",
      children: [
        {
          path: "/main/home",
          component: () => import("./pages/home.vue"),
        },
        // {
        //   path: "/main/open",
        //   name: "open",
        //   component: () => import("./pages/open-withouut-layout.vue"),
        // },
      ],
    },
    {
      path: "/open",
      name: "open",
      component: () => import("./pages/open-withouut-layout.vue"),
    },
  ],
});

export default router;
