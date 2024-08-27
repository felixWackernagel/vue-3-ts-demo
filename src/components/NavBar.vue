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
    <ul v-show="isDroidFridge">
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
import { computed } from "vue";

const route = useRoute();
const isDroidFridge = computed(() => {
  if (typeof route.name === "string") {
    return (route.name as string).startsWith("droidFridge");
  }
  return false;
});
</script>
<style lang="scss">
nav {
  margin-bottom: 15px;
  border: 1px solid var(--clr-primary);
  border-radius: 8px;
  background-color: var(--clr-primary);

  a {
    padding: 4px 8px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: color 200ms ease, border-color 200ms ease;
    color: var(--background);

    &:hover,
    &.router-link--exact-active {
      border-color: var(--background);
    }
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: 8px;

    + ul {
      border-top: 1px solid var(--background);
    }
  }

  li + li:before {
    content: "/";
    padding: 0 8px;
    color: var(--background);
  }
}
</style>
