<template>
  <p>{{ name }} - {{ age }}</p>
  <button @click="changeName('Zelda')">Change Name</button>
  <button @click="changeAge(30)">Change Age</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      name: "Link",
      age: 25 as number | string,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
    changeAge(age: string | number) {
      this.age = age;
    },
  },
});
</script>

<style lang="scss">
$textColor: #2c3e50;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $textColor;
  margin-top: 60px;
}
</style>
