<template>
  <div
    class="work-container"
  >
    <div class="row image-sec" :class="{ 'web-piece': this.thePiece.type === 'web' }">
      <!-- <transition name="image-in" mode="out-in" appear> -->
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

        <component
          v-else-if="this.thePiece.type === 'web'"
          :piece="this.thePiece"
          :key="this.thePiece.link"
          :is="this.thePiece.stuff.component"
        ></component>
      <!-- </transition> -->

      <PieceInfo
        v-if="this.thePiece.type !== 'web'"
        :piece="this.thePiece"
        :isPiece="this.isPiece"
      ></PieceInfo>
    </div>

    <!-- <transition name="text-in" mode="out-in" appear> -->
      <PieceText
        v-if="this.thePiece.stuff.text"
        :piece="this.thePiece"
        :key="this.thePiece.stuff.text"
      ></PieceText>
    <!-- </transition> -->

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
import TwoWebsitesInOne from '@/components/web-pieces/TwoWebsitesInOne'

export default {
  name: 'Work',
  components: {
    VideoSec,
    AudioSec,
    LargeView,
    ImageSec,
    PieceInfo,
    PieceText,
    TwoWebsitesInOne
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
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('setIndexCrumb', false)
    next()
  }
}
</script>

<style lang="scss" scoped>
  .row.web-piece {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
