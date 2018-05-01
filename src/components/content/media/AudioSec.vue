<template>
    <transition name="image-in" mode="out-in" appear>
      <div
        class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center"
        :key="piece.link"
      >
        <audio
          :src="require(`@/assets/audio/${piece.stuff.imgSrc}`)"
          controls
          controlslist="nodownload"
          class="mb-5"
        ></audio>
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
