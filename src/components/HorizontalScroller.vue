<template>
  <section class="horizontal-scroller">
    <div class="slider" ref="slider">
      <div class="form" ref="form">
        <div class="item">
          <img
            class="cover"
            src="@/assets/images/bad_erna_1.jpg"
            alt="Bad Erna 1"
          />
        </div>
        <div class="item">
          <img
            class="cover"
            src="@/assets/images/bad_erna_2.jpg"
            alt="Bad Erna 2"
          />
        </div>
        <div class="item">
          <img
            class="cover"
            src="@/assets/images/bad_erna_3.jpg"
            alt="Bad Erna 3"
          />
        </div>
        <div class="item">
          <img
            class="cover"
            src="@/assets/images/bad_erna_4.jpg"
            alt="Bad Erna 4"
          />
        </div>
        <div class="item">
          <img
            class="cover"
            src="@/assets/images/bad_erna_5.jpg"
            alt="Bad Erna 5"
          />
        </div>
        <div class="item">
          <img
            class="cover"
            src="@/assets/images/bad_erna_6.jpg"
            alt="Bad Erna 6"
          />
        </div>
        <div class="item">
          <img
            class="cover"
            src="@/assets/images/bad_erna_7.jpg"
            alt="Bad Erna 7"
          />
        </div>
        <div class="item">
          <img
            class="cover"
            src="@/assets/images/bad_erna_8.jpg"
            alt="Bad Erna 8"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
export default defineComponent({
  setup() {
    const slider = ref<HTMLDivElement | null>(null);
    const form = ref<HTMLDivElement | null>(null);
    onMounted(() => {
      const sliderEl: HTMLDivElement | null = slider.value;
      const formEl: HTMLDivElement | null = form.value;
      if (sliderEl && formEl) {
        let mouseDownAt = 0;
        let left = 0;
        sliderEl.onmousedown = (e) => {
          mouseDownAt = e.clientX;
          console.log(mouseDownAt);
        };
        sliderEl.onmouseup = () => {
          mouseDownAt = 0;
          sliderEl.style.userSelect = "unset";
          sliderEl.style.cursor = "unset";
          formEl.style.pointerEvents = "unset";
          formEl.classList.remove("left");
          formEl.classList.remove("right");
        };
        sliderEl.onmouseleave = () => {
          mouseDownAt = 0;
          sliderEl.style.userSelect = "unset";
          sliderEl.style.cursor = "unset";
          formEl.style.pointerEvents = "unset";
          formEl.classList.remove("left");
          formEl.classList.remove("right");
        };
        sliderEl.onmousemove = (e) => {
          if (mouseDownAt == 0) return;
          sliderEl.style.userSelect = "none";
          sliderEl.style.cursor = "grab";
          formEl.style.pointerEvents = "none";

          if (e.clientX > mouseDownAt) {
            formEl.classList.add("left");
            formEl.classList.remove("right");
          } else if (e.clientX < mouseDownAt) {
            formEl.classList.remove("left");
            formEl.classList.add("right");
          }
          // increase or decrease the speed
          //by changing the value of 'speed'
          let speed = 1;
          let leftTemporary = left + (e.clientX - mouseDownAt) / speed;
          let leftLimit = formEl.offsetWidth - sliderEl.offsetWidth / 2;

          if (leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit) {
            formEl.style.setProperty("--left", left + "px");
            left = leftTemporary;
            mouseDownAt = e.clientX;
          }
        };
      }
    });
    return { slider, form };
  },
});
</script>

<style lang="scss">
.horizontal-scroller {
  padding-top: 50px;

  .slider {
    overflow: hidden;
    box-sizing: border-box;
    box-shadow: inset 0px 11px 8px -10px #888, inset 0px -11px 8px -10px #888;
    background-color: #ccc;
    padding-top: 8px;

    &::-webkit-scrollbar {
      width: 0;
    }

    .form {
      --left: 0;
      width: max-content;
      transform: translateX(var(--left));

      .item {
        display: inline-block;
        width: 200px;
        height: 250px;

        + .item {
          margin-left: 30px;
        }
      }
    }
  }
}
</style>
