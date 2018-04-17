<template>
  <transition name="fade-in">
    <div class="lg-view position-fixed w-100 h-100 d-flex justify-content-center align-items-center">
      <img :src="image" @click="$emit('switch-large')">
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LargeView',
  props: [
    'image'
  ]
}
</script>

<style lang="scss" scoped>
  .lg-view {
    top: 0px;
    left: 0px;
    background: white;
    pointer-events: none;

    &.active {
      pointer-events: auto;
    }

    img {
      width: auto;
      max-width: 80%;
      max-height: 90%;
      cursor: zoom-out;
    }
  }

  .fade-in-enter,
  .fade-in-leave-to {
    opacity: 0;
  }

  .fade-in-enter-to,
  .fade-in-leave {
    opacity: 1;
  }

  .fade-in-enter-active,
  .fade-in-leave-active {
    transition: opacity 1s;
  }
</style>
