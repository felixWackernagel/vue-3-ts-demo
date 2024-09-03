<template>
  <div class="reveal-container" ref="container">
    <img
      src="@/assets/images/bad_erna_8.webp"
      class="cover card"
      alt="Bad Erna 1"
    />
    <div class="reveal-container__content">
      <h3>Die Familienhütte Wackernagel</h3>
      <p>
        Ein Gebäude das die Familie zusammenbringt und Freunde einläd zu
        verweilen.
      </p>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="reveal-container__toggle"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </svg>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
const container = ref<HTMLDivElement | null>(null);
onMounted(() => {
  const containerEl: HTMLDivElement | null = container.value;
  if (containerEl) {
    containerEl.addEventListener("click", () => {
      containerEl.classList.toggle("reveal-container--revealed");
    });
  }
});
</script>
<style lang="scss">
.reveal-container {
  position: relative;
  margin-bottom: 30px;
  cursor: pointer;

  &.reveal-container--revealed {
    .reveal-container__content {
      clip-path: circle(200% at calc(100% - 1rem - 12px) calc(1rem + 12px));
    }
    .reveal-container__toggle {
      fill: $primary900;
    }
  }

  img {
    max-height: 500px;
  }

  .reveal-container__content {
    position: absolute;
    inset: 0;
    padding: 1rem;
    color: $primary900;
    background: $colorOnPrimary;
    clip-path: circle(0 at calc(100% - 1rem - 12px) calc(1rem + 12px));
    transition: clip-path 500ms ease-in-out;
    border-radius: 10px;
  }

  .reveal-container__toggle {
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 15;
    fill: #ffffff;
    transition: fill 500ms ease;
  }
}
</style>
