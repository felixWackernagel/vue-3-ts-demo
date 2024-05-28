<template>
  <section class="horizontal-scroller">
    <div class="slider">
      <item>
        <img src="@/assets/images/bad_erna_1.jpg" alt="Bad Erna 1" />
      </item>
      <item>
        <img src="@/assets/images/bad_erna_2.jpg" alt="Bad Erna 2" />
      </item>
      <item>
        <img src="@/assets/images/bad_erna_3.jpg" alt="Bad Erna 3" />
      </item>
      <item>
        <img src="@/assets/images/bad_erna_4.jpg" alt="Bad Erna 4" />
      </item>
      <item>
        <img src="@/assets/images/bad_erna_5.jpg" alt="Bad Erna 5" />
      </item>
      <item>
        <img src="@/assets/images/bad_erna_6.jpg" alt="Bad Erna 6" />
      </item>
      <item>
        <img src="@/assets/images/bad_erna_7.jpg" alt="Bad Erna 7" />
      </item>
      <item>
        <img src="@/assets/images/bad_erna_8.jpg" alt="Bad Erna 8" />
      </item>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    // const slider = document.querySelector(".slider");
    // const form = document.querySelector(".form");
    // let mouseDownAt = 0;
    // let left = 0;
    // slider.onmousedown = (e) => {
    //   mouseDownAt = e.clientX;
    //   console.log(mouseDownAt);
    // };
    // slider.onmouseup = () => {
    //   mouseDownAt = 0;
    //   slider.style.userSelect = 'unset';
    //   slider.style.cursor = 'unset';
    //   form.style.pointerEvents = 'unset';
    //   form.classList.remove('left');
    //   form.classList.remove('right');
    // }
    // slider.onmouseleave = () => {
    //   mouseDownAt = 0;
    //   slider.style.userSelect = 'unset';
    //   slider.style.cursor = 'unset';
    //   form.style.pointerEvents = 'unset';
    //   form.classList.remove('left');
    //   form.classList.remove('right');
    // }
    // slider.onmousemove = e => {
    //   if(mouseDownAt == 0) return;
    //   slider.style.userSelect = 'none';
    //   slider.style.cursor = 'grab';
    //   form.style.pointerEvents = 'none';
    //
    //   if(e.clientX > mouseDownAt){
    //     form.classList.add('left');
    //     form.classList.remove('right');
    //   }else if(e.clientX < mouseDownAt){
    //     form.classList.remove('left');
    //     form.classList.add('right');
    //   }
    //   // increase or decrease the speed
    //   //by changing the value of 'speed'
    //   let speed = 1;
    //   let leftTemporary = left + ((e.clientX - mouseDownAt) / speed);
    //   let leftLimit = form.offsetWidth - slider.offsetWidth / 2;
    //
    //
    //   if(leftTemporary < 0 && Math.abs(leftTemporary) < leftLimit){
    //     form.style.setProperty('--left', left + 'px');
    //     left = leftTemporary;
    //     mouseDownAt = e.clientX;
    //   }
    //
    // }

    return {};
  },
});
</script>

<style lang="scss">
.horizontal-scroller {
  overflow: auto;
  box-sizing: border-box;

  .slider {
    --left: 0;
    width: max-content;
    transform: translateX(var(--left));

    &::-webkit-scrollbar {
      width: 0;
    }

    .item {
      display: inline-block;
      width: 200px;
      height: 300px;
      margin-right: 20px;
      border-radius: 10px;
    }
  }
}
</style>
