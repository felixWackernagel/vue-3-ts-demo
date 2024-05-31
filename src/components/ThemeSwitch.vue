<template>
  <button @click.prevent="setTheme('dark')">{{ activeTheme }}</button>
</template>
<script setup lang="ts">
import { useThemeSwitchStore } from "@/stores/themeSwitch";
import { storeToRefs } from "pinia";
import Theme from "@/types/Theme";

const store = useThemeSwitchStore();
const { activeTheme } = storeToRefs(store);

function setTheme(newTheme: Theme) {
  document.body.classList.remove("theme-" + activeTheme.value);
  store.setTheme(newTheme);
  document.body.classList.add("theme-" + newTheme);
}

document.body.classList.add("theme-" + activeTheme.value);
</script>
