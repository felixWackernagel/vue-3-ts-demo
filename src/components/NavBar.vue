<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'droidfridge' }">DroidFridge</RouterLink>
    <RouterLink :to="{ name: 'development' }">Development</RouterLink>
    <RouterLink :to="{ name: 'about' }">About</RouterLink>
  </nav>
</template>
