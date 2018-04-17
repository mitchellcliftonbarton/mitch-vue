<template>
  <div class="row image-sec">
    <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
      <transition name="image-in" mode="out-in">
        <img
          v-for="(img) in images"
          :src="require('@/assets/images/' + img)"
          :key="require('@/assets/images/' + img)"
          class="pb-5"
          :data-num="num"
          @click="$emit('switch-large', $event)"
        >
      </transition>
    </div>
    <div class="piece-info col-12 col-md-3">
      <transition name="info-in" mode="out-in">
        <p :key="piece.stuff.title">{{ piece.stuff.title }}</p>
      </transition>
      <transition name="info-in" mode="out-in">
        <p :key="piece.stuff.date">{{ piece.stuff.date }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSec',
  props: [
    'piece',
    'images',
    'num'
  ]
}
</script>

<style lang="scss" scoped>
  .image-sec {
    img {
      cursor: zoom-in;
    }
  }

  .info-in-enter,
  .info-in-leave-to,
  .image-in-enter,
  .image-in-leave-to {
    opacity: 0;
  }

  .info-in-enter {
    transform: translateY(10px);
  }

  .image-in-enter {
    transform: translateY(20px);
  }

  .info-in-enter-to,
  .image-in-enter-to {
    transform: translateY(0px);
  }

  .info-in-leave,
  .image-in-leave {
    transform: translateY(0px);
  }

  .info-in-leave-to {
    transform: translateY(-10px);
  }

  .image-in-leave-to {
    transform: translateY(-10px);
  }

  .info-in-enter-to,
  .info-in-leave,
  .image-in-enter-to,
  .image-in-leave {
    opacity: 1;
  }

  .info-in-enter-active,
  .info-in-leave-active {
    transition: opacity cubic-bezier(.4,.46,.07,.91) .3s, transform cubic-bezier(.4,.46,.07,.91) .3s;
  }

  .image-in-enter-active,
  .image-in-leave-active {
    transition: opacity cubic-bezier(.4,.46,.07,.91) .4s, transform cubic-bezier(.4,.46,.07,.91) .4s;
  }
</style>
