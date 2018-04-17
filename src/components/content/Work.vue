<template>
  <div class="work-container col-12 col-md-9 offset-md-3">
    <ImageSec
      v-if="this.thePiece.type === 'photo'"
      class="m-0 pt-5 inner"
      :piece="this.thePiece"
      :images="this.thePiece.stuff.imgSrc"
      v-on:switch-large="switchLarge()"
    ></ImageSec>

    <VideoSec
      v-else-if="this.thePiece.type === 'video'"
      :piece="this.thePiece"
      class="inner m-0 pt-5"
    >
    </VideoSec>

    <AudioSec
      v-else-if="this.thePiece.type === 'audio'"
      :piece="this.thePiece"
      class="inner m-0 pt-5"
    ></AudioSec>

    <LargeView
      v-if="zoomed"
      :class="{ active: zoomed }"
      :image="require('@/assets/images/' + this.thePiece.stuff.imgSrc[0])"
      v-on:switch-large="switchLarge()"
    ></LargeView>
  </div>
</template>

<script>
import ImageSec from './media/ImageSec'
import VideoSec from './media/VideoSec'
import AudioSec from './media/AudioSec'
import LargeView from './LargeView'

export default {
  name: 'Work',
  components: {
    VideoSec,
    AudioSec,
    LargeView,
    ImageSec
  },
  data () {
    return {
      zoomed: false
    }
  },
  computed: {
    thePiece () {
      return this.$store.state.pieces.find((e) => {
        return e.link === this.$route.params.piece
      })
    }
  },
  methods: {
    switchLarge () {
      this.zoomed ? this.zoomed = false : this.zoomed = true
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('setIndexCrumb', false)
    next()
  }
}
</script>

<style lang="scss" scoped>
</style>
