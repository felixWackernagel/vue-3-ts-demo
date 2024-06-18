<template>
  <section class="horizontal-scroller">
    <div class="slider" ref="sliderRef">
      <div class="form" ref="formRef">
        <div class="item">
          <img
            class="cover card"
            src="@/assets/images/bad_erna_1.jpg"
            alt="Bad Erna 1"
          />
        </div>
        <div class="item">
          <img
            class="cover card"
            src="@/assets/images/bad_erna_2.jpg"
            alt="Bad Erna 2"
          />
        </div>
        <div class="item">
          <img
            class="cover card"
            src="@/assets/images/bad_erna_3.jpg"
            alt="Bad Erna 3"
          />
        </div>
        <div class="item">
          <img
            class="cover card"
            src="@/assets/images/bad_erna_4.jpg"
            alt="Bad Erna 4"
          />
        </div>
        <div class="item">
          <img
            class="cover card"
            src="@/assets/images/bad_erna_5.jpg"
            alt="Bad Erna 5"
          />
        </div>
        <div class="item">
          <img
            class="cover card"
            src="@/assets/images/bad_erna_6.jpg"
            alt="Bad Erna 6"
          />
        </div>
        <div class="item">
          <img
            class="cover card"
            src="@/assets/images/bad_erna_7.jpg"
            alt="Bad Erna 7"
          />
        </div>
        <div class="item">
          <img
            class="cover card"
            src="@/assets/images/bad_erna_8.jpg"
            alt="Bad Erna 8"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

const sliderRef = ref<HTMLDivElement | null>(null);
const formRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const slider: HTMLDivElement | null = sliderRef.value;
  const form: HTMLDivElement | null = formRef.value;
  if (slider && form) {
    let mouseDownAt = 0;
    let left = 0;

    let viewportWidth = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    let elementsWidth = form.offsetWidth;
    let maxScrollDistance =
      viewportWidth > elementsWidth ? 0 : elementsWidth - viewportWidth;

    const onMouseDown = function (event: MouseEvent) {
      mouseDownAt = event.clientX;
    };

    const onMouseMove = function (event: MouseEvent) {
      if (mouseDownAt == 0) return;
      slider.style.userSelect = "none";
      slider.style.cursor = "grab";
      form.style.pointerEvents = "none";

      if (event.clientX > mouseDownAt) {
        form.classList.add("left");
        form.classList.remove("right");
      } else if (event.clientX < mouseDownAt) {
        form.classList.remove("left");
        form.classList.add("right");
      }
      // increase or decrease the speed
      //by changing the value of 'speed'
      let speed = 1;
      let leftTemporary = left + (event.clientX - mouseDownAt) / speed;

      if (leftTemporary < 0 && Math.abs(leftTemporary) < maxScrollDistance) {
        form.style.setProperty("--left", left + "px");
        left = leftTemporary;
        mouseDownAt = event.clientX;
      }
    };

    const onMouseUp = function () {
      mouseDownAt = 0;
      slider.style.userSelect = "unset";
      slider.style.cursor = "unset";
      form.style.pointerEvents = "unset";
      form.classList.remove("left");
      form.classList.remove("right");
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mouseleave", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);
  }
});
</script>

<style lang="scss">
.horizontal-scroller {
  padding-top: 50px;
  margin-bottom: 30px;

  .slider {
    overflow: hidden;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      width: 0;
    }

    .form {
      --left: 0;
      width: max-content;
      transform: translateX(var(--left));
      height: 258px;

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
