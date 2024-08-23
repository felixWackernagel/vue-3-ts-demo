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
    <ul v-show="$route.matched.some(({ name }) => name === 'droidFridge')">
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

<style lang="scss">
ul {
}
.router-link--active {
}

.router-link--exact-active {
}
</style>
