<template>
  <div class="lg-view position-fixed w-100 h-100 d-flex justify-content-center align-items-center">
    <img :src="image" @click="$emit('switch-large')">
  </div>
</template>

<script>
export default {
  name: 'LargeView',
  props: [
    'image'
  ]
}
</script>

<style lang="scss">
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
    }
  }
</style>
