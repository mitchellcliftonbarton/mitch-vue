<template>
    <transition name="image-in" mode="out-in" appear>
      <div
        class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center"
        :key="piece.link"
      >
        <video
          :src="require(`@/assets/videos/${piece.stuff.imgSrc}`)"
          width="560"
          height="315"
          controls
          controlslist="nodownload"
          class="mb-5"
        >
        </video>
      </div>
    </transition>
    <!-- <transition name="info-in" mode="out-in" appear>
      <div
        class="piece-info col-12 col-md-3"
        :key="piece.hiddenTitle"
      >
        <p>{{ piece.stuff.title }}</p>
        <p>{{ piece.stuff.date }}</p>
        <p class="mt-3">
          <span v-if="this.isPiece">From </span>
          <router-link :to="!this.isPiece ? `/work/${piece.link}` : `/project/${piece.stuff.series.replace(/\s+/g, '-').toLowerCase()}`">
            {{ this.isPiece ? piece.stuff.series.replace(/\b\w/g, l => l.toUpperCase()) : '+' }}
          </router-link>
        </p>
      </div>
    </transition> -->

    <!-- <transition name="image-in" mode="out-in" appear>
      <div v-if="piece.stuff.text && this.isPiece" class="text col-12 col-md-9 offset-md-3 mt-5">
        <p v-html="piece.stuff.text"></p>
      </div>
    </transition> -->
</template>

<script>
export default {
  name: 'VideoSec',
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
  video {
    width: 100%;

    @include breakpoint(md-up) {
      width: auto;
    }
  }
</style>
