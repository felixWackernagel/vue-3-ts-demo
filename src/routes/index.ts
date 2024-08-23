import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/impressum",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/droidfridge",
    children: [
      {
        path: "",
        name: "droidFridgeHome",
        component: () => import("../views/DroidFridgeHomeView.vue"),
      },
      {
        path: "datenschutz",
        name: "droidFridgeDataProtection",
        component: () => import("../views/DroidFridgeDataProtectionView.vue"),
      },
    ],
  },
  {
    path: "/spielwiese",
    name: "development",
    component: () => import("../views/DevelopmentView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/NotFoundView.vue"),
  },
];

const router = createRouter({
  linkActiveClass: "router-link--active",
  linkExactActiveClass: "router-link--exact-active",
  history: createWebHistory(),
  routes,
});

export default router;
