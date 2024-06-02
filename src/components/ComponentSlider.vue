<template>
  <div class="slider reverse slow">
    <ul class="list">
      <li class="item" style="--position: 1">
        <img
          src="@/assets/images/bad_erna_1.jpg"
          class="cover card"
          alt="Bad Erna 1"
        />
      </li>
      <li class="item" style="--position: 2">
        <img
          src="@/assets/images/bad_erna_2.jpg"
          class="cover card"
          alt="Bad Erna 2"
        />
      </li>
      <li class="item" style="--position: 3">
        <img
          src="@/assets/images/bad_erna_3.jpg"
          class="cover card"
          alt="Bad Erna 3"
        />
      </li>
      <li class="item" style="--position: 4">
        <img
          src="@/assets/images/bad_erna_4.jpg"
          class="cover card"
          alt="Bad Erna 4"
        />
      </li>
      <li class="item" style="--position: 5">
        <img
          src="@/assets/images/bad_erna_5.jpg"
          class="cover card"
          alt="Bad Erna 5"
        />
      </li>
      <li class="item" style="--position: 6">
        <img
          src="@/assets/images/bad_erna_6.jpg"
          class="cover card"
          alt="Bad Erna 6"
        />
      </li>
      <li class="item" style="--position: 7">
        <img
          src="@/assets/images/bad_erna_7.jpg"
          class="cover card"
          alt="Bad Erna 7"
        />
      </li>
      <li class="item" style="--position: 8">
        <img
          src="@/assets/images/bad_erna_8.jpg"
          class="cover card"
          alt="Bad Erna 8"
        />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.slider {
  --height: 100px;
  --width: 150px;
  --quantity: 8;
  --duration: 10s;

  &.slow {
    --duration: 20s;
  }

  width: 100%;
  height: calc(var(--height) + 8px);
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent);
  margin-bottom: 40px;

  &:hover .list .item {
    animation-play-state: paused !important;
    filter: grayscale(1);
  }

  &.reverse .list .item {
    animation: reversePlay var(--duration) linear infinite;
  }

  .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--quantity) * var(--width));
    position: relative;

    .item {
      height: var(--height);
      width: var(--width);
      position: absolute;
      left: 100%;
      transition: filter 500ms;
      animation: autoRun var(--duration) linear infinite;
      animation-delay: calc(
        (var(--duration) / var(--quantity)) * (var(--position) - 1)
      ) !important;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: calc(var(--width) * -1);
    }
  }

  @keyframes reversePlay {
    from {
      left: calc(var(--width) * -1);
    }
    to {
      left: 100%;
    }
  }
}
</style>
