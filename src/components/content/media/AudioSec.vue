<template>
  <div
    class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center"
  >
    <audio
      :src="require(`@/assets/audio/${piece.stuff.imgSrc}`)"
      controls
      controlslist="nodownload"
      class="mb-5"
    ></audio>
  </div>
</template>

<script>
export default {
  name: 'AudioSec',
  props: [
    'piece'
  ],
  computed: {
    isPiece () {
      return this.$route.params.piece
    }
  }
}
</script>

<style lang="scss">
  @import './../../../assets/scss/mixins/mixins';
  audio {
    width: 100%;

    @include breakpoint(md-up) {
      width: 500px;
    }
  }
</style>
