import { createRouter, createWebHistory } from "vue-router";
import i18n from "@/i18n";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: {
      title: i18n.global.t("navHome"),
    },
  },
  {
    path: "/impressum",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: i18n.global.t("navAbout"),
    },
  },
  {
    path: "/droidfridge",
    children: [
      {
        path: "",
        name: "droidFridgeHome",
        component: () => import("../views/DroidFridgeHomeView.vue"),
        meta: {
          title: i18n.global.t("navDroidFridgeHome"),
        },
      },
      {
        path: "datenschutz",
        name: "droidFridgeDataProtection",
        component: () => import("../views/DroidFridgeDataProtectionView.vue"),
        meta: {
          title: i18n.global.t("navDroidFridgeDataProtection"),
        },
      },
    ],
  },
  {
    path: "/spielwiese",
    name: "development",
    component: () => import("../views/DevelopmentView.vue"),
    meta: {
      title: i18n.global.t("navDevelopment"),
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/NotFoundView.vue"),
    meta: {
      title: i18n.global.t("pageNotFound"),
    },
  },
];

const router = createRouter({
  linkActiveClass: "router-link--active",
  linkExactActiveClass: "router-link--exact-active",
  history: createWebHistory(),
  routes,
});
router.beforeEach((to) => {
  const pageTitle = to.meta?.title;
  const baseTitle = i18n.global.t("appTitle");
  document.title = pageTitle ? `${pageTitle} | ${baseTitle}` : baseTitle;
});

export default router;
