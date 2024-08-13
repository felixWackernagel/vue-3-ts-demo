<template>
  <nav>
    <ul>
      <li>
        <RouterLink :to="{ name: 'home' }">{{ $t("navHome") }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'droidfridge' }">{{
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
  </nav>
</template>

<style lang="scss">
.router-link--active {
}

.router-link--exact-active {
}
</style>
