<template>
  <img src="#" alt="" ref="el" class="image-component" :data-src="source" />
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";

interface Props {
  source: string;
}

let props = defineProps<Props>();

const el = ref<HTMLImageElement | null>(null);

onMounted(() => {
  const imageElements = Array.from(
    document.querySelectorAll<HTMLImageElement>(
      `.image-component[data-src="${props.source}"]`
    )
  );

  if (!imageElements.length) {
    return;
  }

  function loadImage(image: HTMLImageElement) {
    if (!image) {
      return;
    }

    let src = image.getAttribute("data-src");
    if (!src) {
      return;
    }

    image.src = src;
    image.removeAttribute("data-src");
  }

  function handleIntersect(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      } else {
        loadImage(entry.target as HTMLImageElement);
        observer.unobserve(entry.target);
      }
    });
  }

  function createObserver(image: HTMLImageElement) {
    const options = {
      threshold: 0,
      rootMargin: "0px 0px 300px 0px",
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(image);
  }

  imageElements.forEach((imageElement) => {
    if (window["IntersectionObserver"]) {
      createObserver(imageElement);
    } else {
      loadImage(imageElement);
    }
  });
});
</script>
<style lang="scss">
.image-component {
  display: block;
  min-width: 100px;
  min-height: 100px;
}
</style>
