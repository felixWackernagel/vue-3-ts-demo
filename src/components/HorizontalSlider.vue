<template>
  <div class="scroller" ref="scroller">
    <ul class="scroller_inner">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>SSG</li>
      <li>animation</li>
      <li>UI/UX</li>
      <li>webdev</li>
      <li>SCSS</li>
      <li>TypeScript</li>
      <li>React</li>
      <li>Vue</li>
      <li>Angular</li>
      <li>Components</li>
      <li>Functions</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

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
    -webkit-mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );
    mask: linear-gradient(
      90deg,
      transparent,
      white 20%,
      white 80%,
      transparent
    );

    .scroller_inner {
      width: max-content;
      flex-wrap: nowrap;
      animation: scroll var(--_animation-duration, 40s)
        var(--_animation-direction, forwards) linear infinite;
    }
  }

  .scroller_inner {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 40px;
    padding-block: 1rem;

    li {
      padding: 1rem;
      background: $primary400;
      border-radius: 0.5rem;
      box-shadow: 0 0.5rem 1rem -0.25rem $primary800;
      color: $colorOnPrimary;
    }
  }

  @keyframes scroll {
    to {
      transform: translate(calc(-50% - 0.5rem));
    }
  }
}
</style>
