<template>
  <div
    class="work-container col-12 col-md-9 offset-md-3"
  >
    <div class="row image-sec">
      <transition name="image-in" mode="out-in" appear>
        <ImageSec
          v-if="this.thePiece.type === 'photo'"
          class="m-0 pt-5 inner"
          :piece="this.thePiece"
          :images="this.thePiece.stuff.imgSrc"
          v-on:switch-large="switchLarge()"
          :key="this.thePiece.link"
        ></ImageSec>

        <VideoSec
          v-else-if="this.thePiece.type === 'video'"
          :piece="this.thePiece"
          class="inner m-0 pt-5"
          :key="this.thePiece.link"
        >
        </VideoSec>

        <AudioSec
          v-else-if="this.thePiece.type === 'audio'"
          :piece="this.thePiece"
          class="inner m-0 pt-5"
          :key="this.thePiece.link"
        ></AudioSec>
      </transition>

      <PieceInfo
        :piece="this.thePiece"
        :isPiece="this.isPiece"
      ></PieceInfo>
    </div>

    <transition name="text-in" mode="out-in" appear>
      <PieceText
        v-if="this.thePiece.stuff.text"
        :piece="this.thePiece"
        :key="this.thePiece.stuff.text"
      ></PieceText>
    </transition>

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
import PieceInfo from './PieceInfo'
import PieceText from './PieceText'

export default {
  name: 'Work',
  components: {
    VideoSec,
    AudioSec,
    LargeView,
    ImageSec,
    PieceInfo,
    PieceText
  },
  data () {
    return {
      zoomed: false
    }
  },
  computed: {
    thePiece () {
      return this.$store.state.pieces.find(e => e.link === this.$route.params.piece)
    },
    isPiece () {
      return this.$route.params.piece
    }
  },
  methods: {
    switchLarge () {
      this.zoomed ? this.zoomed = false : this.zoomed = true
    }
  },
  beforeRouteEnter (to, from, next) {
    // alert('i would load data here')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // alert('i would load data here again')
    next()
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('setIndexCrumb', false)
    next()
  }
}
</script>

<style lang="scss" scoped>
</style>
