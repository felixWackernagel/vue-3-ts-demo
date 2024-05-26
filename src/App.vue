<template>
  <img src="./assets/heart.svg" alt="heart icon" />
  <h1>Hyrule Jobs</h1>
  <button @click="handleClick('location')">Order by location</button>
  <button @click="handleClick('title')">Order by title</button>
  <button @click="handleClick('salary')">Order by salary</button>
  <JobsList :jobs="jobs" :order="order" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "@/types/Job";
import OrderTerm from "@/types/OrderTerm";
import JobsList from "@/components/JobsList.vue";

export default defineComponent({
  name: "App",
  components: { JobsList },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "farm worker",
        salary: 3000,
        location: "lon lon farm",
        id: "1",
      },
      {
        title: "quarryman",
        salary: 5000,
        location: "death mountain",
        id: "2",
      },
      {
        title: "flute player",
        salary: 2000,
        location: "the lost woods",
        id: "3",
      },
      {
        title: "fisherman",
        salary: 1000,
        location: "lake hylia",
        id: "4",
      },
    ]);

    const order = ref<OrderTerm>("title");
    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, handleClick, order };
  },
  methods: {},
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
