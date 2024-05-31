import { defineStore } from "pinia";
import Theme from "@/types/Theme";

export const useThemeSwitchStore = defineStore("themeSwitch", {
  state: () => ({
    activeTheme: "light" as Theme,
  }),
  actions: {
    setTheme(theme: Theme) {
      this.activeTheme = theme;
    },
  },
  persist: true,
});
