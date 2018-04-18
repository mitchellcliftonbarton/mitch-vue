<template>
  <div class="row image-sec">
    <transition name="image-in" mode="out-in" appear>
      <div
        class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center"
        :key="piece.link"
      >
        <img
          v-for="(img, index) in images"
          :src="require(`@/assets/images/${img}`)"
          :key="index"
          class="pb-5"
          :data-num="num"
          @click="$emit('switch-large', $event)"
        >
      </div>
    </transition>
    <transition name="info-in" mode="out-in" appear>
      <div
        class="piece-info col-12 col-md-3"
        :key="piece.hiddenTitle"
      >
        <p>{{ piece.stuff.title }}</p>
        <p>{{ piece.stuff.date }}</p>
      </div>
    </transition>
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
</style>
