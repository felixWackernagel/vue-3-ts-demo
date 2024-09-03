<template>
  <div class="scroller" ref="scroller">
    <ul class="scroller_inner">
      <li>
        <ImageComponent
          class="cover card"
          :source="require('@/assets/images/bad_erna_1.webp')"
          alt="Bad Erna - 1"
        />
      </li>
      <li>
        <ImageComponent
          class="cover card"
          :source="require('@/assets/images/bad_erna_2.webp')"
          alt="Bad Erna - 2"
        />
      </li>
      <li>
        <ImageComponent
          class="cover card"
          :source="require('@/assets/images/bad_erna_3.webp')"
          alt="Bad Erna - 3"
        />
      </li>
      <li>
        <ImageComponent
          class="cover card"
          :source="require('@/assets/images/bad_erna_4.webp')"
          alt="Bad Erna - 4"
        />
      </li>
      <li>
        <ImageComponent
          class="cover card"
          :source="require('@/assets/images/bad_erna_5.webp')"
          alt="Bad Erna - 5"
        />
      </li>
      <li>
        <ImageComponent
          class="cover card"
          :source="require('@/assets/images/bad_erna_6.webp')"
          alt="Bad Erna - 6"
        />
      </li>
      <li>
        <ImageComponent
          class="cover card"
          :source="require('@/assets/images/bad_erna_7.webp')"
          alt="Bad Erna - 7"
        />
      </li>
      <li>
        <ImageComponent
          class="cover card"
          :source="require('@/assets/images/bad_erna_8.webp')"
          alt="Bad Erna - 8"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import ImageComponent from "@/components/ImageComponent.vue";

const scroller = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const scrollerEl: HTMLDivElement | null = scroller.value;
  if (scrollerEl) {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollerEl.setAttribute("data-animated", "true");

      const scrollerInner = scrollerEl.querySelector(".scroller_inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }
  }
});
</script>

<style lang="scss">
.scroller {
  &[data-direction="right"] {
    --_animation-direction: reverse;
  }
  &[data-direction="left"] {
    --_animation-direction: forwards;
  }
  &[data-speed="fast"] {
    --_animation-duration: 20s;
  }
  &[data-speed="slow"] {
    --_animation-duration: 120s;
  }
  &[data-animated="true"] {
    overflow: hidden;

    &:hover .scroller_inner {
      animation-play-state: paused;
    }

    .scroller_inner {
      width: max-content;
      flex-wrap: nowrap;
      animation: scroll var(--_animation-duration, 40s)
        var(--_animation-direction, forwards) linear infinite;
    }
  }
  &:hover li {
    filter: grayscale(1);
  }

  .scroller_inner {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-block: 1rem;

    li {
      height: var(--_height, 100px);
      width: var(--_width, 150px);
      transition: filter 200ms;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
    }
  }
}
</style>
