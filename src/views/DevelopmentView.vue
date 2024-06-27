<script lang="ts">
import { defineComponent, ref } from "vue";
import Job from "@/types/Job";
import OrderTerm from "@/types/OrderTerm";
import JobsList from "@/components/JobsList.vue";
import HorizontalScroller from "@/components/HorizontalScroller.vue";
import HorizontalSlider from "@/components/HorizontalSlider.vue";
import ImageComponent from "@/components/ImageComponent.vue";

export default defineComponent({
  name: "DevelopmentView",
  components: {
    HorizontalScroller,
    JobsList,
    HorizontalSlider,
    ImageComponent,
  },
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
<template>
  <h2>HorizontalSlider</h2>
  <p>
    Ein automatischer Slider dessen Geschwindigkeit und Richtung angepasst
    werden kann. Der Inhalt des Slider kann beliebig verändert werden von einer
    Tag-Liste bis zur Bildergalerie. Die Komponente stellt sich anders da, wenn
    die "prefered-motion" als reduced konfiguriert ist.
  </p>
  <HorizontalSlider
    class="full-width"
    data-direction="left"
    data-speed="fast"
  />
  <HorizontalSlider
    class="full-width"
    data-direction="right"
    data-speed="slow"
  />
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
      <ImageComponent
        :source="require('@/assets/images/bad_erna_1.jpg')"
        alt="Bad Erna - 1"
      />
    </div>
    <div class="columns-6">
      <ImageComponent
        :source="require('@/assets/images/bad_erna_2.jpg')"
        alt="Bad Erna - 2"
      />
    </div>
    <div class="columns-4">
      <ImageComponent
        :source="require('@/assets/images/bad_erna_3.jpg')"
        alt="Bad Erna - 3"
      />
    </div>
    <div class="columns-4">
      <ImageComponent
        :source="require('@/assets/images/bad_erna_4.jpg')"
        alt="Bad Erna - 4"
      />
    </div>
    <div class="columns-4 rows-2">
      <ImageComponent
        class="cover"
        :source="require('@/assets/images/bad_erna_5.jpg')"
        alt="Bad Erna - 5"
      />
    </div>
    <div class="columns-4">
      <ImageComponent
        :source="require('@/assets/images/bad_erna_6.jpg')"
        alt="Bad Erna - 6"
      />
    </div>
    <div class="columns-4">
      <ImageComponent
        :source="require('@/assets/images/bad_erna_8.jpg')"
        alt="Bad Erna - 8"
      />
    </div>
  </section>

  <HorizontalScroller class="full-width" style="display: none" />

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
      Traditionally, we use a container or wrapper, which we need to close, and
      then open again, but thanks to grid, and with the recent additions of
      subgrid to all the evergreen browsers, maybe there's a better way to do
      things?
    </p>
    <p class="breakout">
      Breakout (left and right)<br />
      Traditionally, we use a container or wrapper, which we need to close, and
      then open again, but thanks to grid, and with the recent additions of
      subgrid to all the evergreen browsers, maybe there's a better way to do
      things?
    </p>
  </section>

  <ImageComponent
    :source="require('@/assets/images/bad_erna_1.jpg')"
    class="full-width"
    alt="Bad Erna - 1"
  />

  <p class="full-width">
    Full-Width<br />
    Traditionally, we use a container or wrapper, which we need to close, and
    then open again, but thanks to grid, and with the recent additions of
    subgrid to all the evergreen browsers, maybe there's a better way to do
    things?
  </p>

  <section class="full-width page-grid has-background-image">
    <ImageComponent
      class="full-width cover"
      :source="require('@/assets/images/bad_erna_2.jpg')"
      alt="Bad Erna - 2"
    />
    <p>
      Content<br />
      Traditionally, we use a container or wrapper, which we need to close, and
      then open again, but thanks to grid, and with the recent additions of
      subgrid to all the evergreen browsers, maybe there's a better way to do
      things?
    </p>
  </section>
</template>
