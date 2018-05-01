<template>
    <transition name="image-in" mode="out-in" appear>
      <div
        class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center"
        :key="piece.link"
      >
        <img
          v-for="(img, index) in images"
          :src="require(`@/assets/images/${img}`)"
          :key="index"
          class="pb-5 piece-image"
          :data-num="num"
          @click="$emit('switch-large', $event)"
        >
      </div>
    </transition>
</template>

<script>
export default {
  name: 'ImageSec',
  props: [
    'piece',
    'images',
    'num'
  ],
  computed: {
    isPiece () {
      return this.$route.params.piece
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-sec {
    img {
      cursor: zoom-in;
    }
  }
</style>
