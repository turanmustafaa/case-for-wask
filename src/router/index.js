import {createRouter, createWebHistory,} from "vue-router";  
  const routes = [
    {
      path: "/",
      redirect: "/home",
      component: () => import("@/layout/MainLayout.vue"),
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/Home.vue"),
          meta: {
            pageTitle: "Home",
            breadcrumbs: ["Home"],
          },
        },
      ],
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
  