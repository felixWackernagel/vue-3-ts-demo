<template>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'home' }">{{ $t("navHome") }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'droidFridgeHome' }">{{
          $t("navDroidFridge")
        }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'development' }">{{
          $t("navDevelopment")
        }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'about' }">{{ $t("navAbout") }}</RouterLink>
      </li>
    </ul>
    <ul v-show="routeName.startsWith('droidFridge')">
      <li>
        <RouterLink :to="{ name: 'droidFridgeHome' }">{{
          $t("navDroidFridgeHome")
        }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'droidFridgeDataProtection' }">{{
          $t("navDroidFridgeDataProtection")
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
let routeName = route ? route.name : "";
if (!routeName) {
  routeName = "";
}
</script>
<style lang="scss">
nav {
  margin-bottom: 15px;

  a {
    padding: 4px 8px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: color 200ms ease, border-color 200ms ease;
    color: var(--foreground);

    &:hover,
    &.router-link--active,
    &.router-link--exact-active {
      color: var(--clr-primary);
      border-color: var(--clr-primary);
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    + ul {
      margin-top: 16px;
    }
  }
}
</style>
