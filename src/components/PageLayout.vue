<template>
  <main class="page-grid">
    <slot></slot>
  </main>
</template>

<style lang="scss">
.page-grid {
  --padding-inline: 18px;
  --content-max-width: 1200px;
  --breakout-max-width: 1400px;
  --breakout-size: calc(
    (var(--breakout-max-width) - var(--content-max-width)) / 2
  );

  display: grid;
  grid-template-columns:
    [full-width-start breakout-left-start]
    minmax(var(--padding-inline), 1fr)
    [breakout-start] minmax(0, var(--breakout-size))
    [content-start breakout-right-start]
    min( 100% - (var(--padding-inline) * 2), var(--content-max-width) )
    [content-end breakout-left-end]
    minmax(0, var(--breakout-size))
    [breakout-end]
    minmax(var(--padding-inline), 1fr)
    [breakout-right-end full-width-end];
}

@media (min-width: 768px) {
  .page-grid {
    --padding-inline: 30px;
  }
}

/* default column size */
.page-grid > *,
.page-sub-grid > * {
  grid-column: content;
}

/* breakout column size */
.page-grid > .breakout,
.page-sub-grid > .breakout {
  grid-column: breakout;
}

/* breakout-left column size */
.page-grid > .breakout-left {
  grid-column: breakout-left;
}

/* breakout-right column size */
.page-grid > .breakout-right {
  grid-column: breakout-right;
}

/* full-width column size */
.page-grid > .full-width {
  grid-column: full-width;
}
</style>
