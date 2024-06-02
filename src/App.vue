<template>
  <PageGrid>
    <header>
      <span class="logo"
        >Felix Wackernagel
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
        >
          <path
            d="M216-176q-45-45-70.5-104T120-402q0-63 24-124.5T222-642q35-35 86.5-60t122-39.5Q501-756 591.5-759t202.5 7q8 106 5 195t-16.5 160.5q-13.5 71.5-38 125T684-182q-53 53-112.5 77.5T450-80q-65 0-127-25.5T216-176Zm112-16q29 17 59.5 24.5T450-160q46 0 91-18.5t86-59.5q18-18 36.5-50.5t32-85Q709-426 716-500.5t2-177.5q-49-2-110.5-1.5T485-670q-61 9-116 29t-90 55q-45 45-62 89t-17 85q0 59 22.5 103.5T262-246q42-80 111-153.5T534-520q-72 63-125.5 142.5T328-192Zm0 0Zm0 0Z"
          />
        </svg>
      </span>
      <ThemeSwitch />
    </header>
    <div>
      <button
        @click="handleClick('location')"
        :class="{ active: 'location' === order }"
      >
        Order by location
      </button>
      <button @click="handleClick('title')">Order by title</button>
      <button @click="handleClick('salary')">Order by salary</button>
    </div>
    <JobsList :jobs="jobs" :order="order" />

    <section class="column-grid">
      <div class="columns-6">
        <img src="@/assets/images/bad_erna_1.jpg" alt="Bad Erna - 1" />
      </div>
      <div class="columns-6">
        <img src="@/assets/images/bad_erna_2.jpg" alt="Bad Erna - 2" />
      </div>
      <div class="columns-4">
        <img src="@/assets/images/bad_erna_3.jpg" alt="Bad Erna - 3" />
      </div>
      <div class="columns-4">
        <img src="@/assets/images/bad_erna_4.jpg" alt="Bad Erna - 4" />
      </div>
      <div class="columns-4 rows-2">
        <img
          class="cover"
          src="@/assets/images/bad_erna_5.jpg"
          alt="Bad Erna - 5"
        />
      </div>
      <div class="columns-4">
        <img src="@/assets/images/bad_erna_6.jpg" alt="Bad Erna - 6" />
      </div>
      <div class="columns-4">
        <img src="@/assets/images/bad_erna_8.jpg" alt="Bad Erna - 8" />
      </div>
    </section>

    <HorizontalScroller class="full-width" />

    <p class="breakout">
      Breakout (left and right)<br />
      Traditionally, we use a container or wrapper, which we need to close, and
      then open again, but thanks to grid, and with the recent additions of
      subgrid to all the evergreen browsers, maybe there's a better way to do
      things?
    </p>
    <p class="breakout-right">
      Breakout (right)<br />
      Traditionally, we use a container or wrapper, which we need to close, and
      then open again, but thanks to grid, and with the recent additions of
      subgrid to all the evergreen browsers, maybe there's a better way to do
      things?
    </p>
    <p class="breakout-left">
      Breakout (left)<br />
      Traditionally, we use a container or wrapper, which we need to close, and
      then open again, but thanks to grid, and with the recent additions of
      subgrid to all the evergreen browsers, maybe there's a better way to do
      things?
    </p>

    <section class="full-width page-grid">
      <p>
        Content<br />
        Traditionally, we use a container or wrapper, which we need to close,
        and then open again, but thanks to grid, and with the recent additions
        of subgrid to all the evergreen browsers, maybe there's a better way to
        do things?
      </p>
      <p class="breakout">
        Breakout (left and right)<br />
        Traditionally, we use a container or wrapper, which we need to close,
        and then open again, but thanks to grid, and with the recent additions
        of subgrid to all the evergreen browsers, maybe there's a better way to
        do things?
      </p>
    </section>

    <img class="full-width" src="./assets/images/bad_erna_1.jpg" alt="" />

    <p class="full-width">
      Full-Width<br />
      Traditionally, we use a container or wrapper, which we need to close, and
      then open again, but thanks to grid, and with the recent additions of
      subgrid to all the evergreen browsers, maybe there's a better way to do
      things?
    </p>

    <section class="full-width page-grid has-background-image">
      <img
        class="full-width cover"
        src="@/assets/images/bad_erna_2.jpg"
        alt=""
      />
      <p>
        Content<br />
        Traditionally, we use a container or wrapper, which we need to close,
        and then open again, but thanks to grid, and with the recent additions
        of subgrid to all the evergreen browsers, maybe there's a better way to
        do things?
      </p>
    </section>
  </PageGrid>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "@/types/Job";
import OrderTerm from "@/types/OrderTerm";
import JobsList from "@/components/JobsList.vue";
import PageGrid from "@/components/PageGrid.vue";
import HorizontalScroller from "@/components/HorizontalScroller.vue";
import ThemeSwitch from "@/components/ThemeSwitch.vue";

export default defineComponent({
  name: "App",
  components: { HorizontalScroller, JobsList, PageGrid, ThemeSwitch },
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
