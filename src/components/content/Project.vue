<template>
  <div class="work-container col-12 col-md-9 offset-md-3">
    <div class="inner pt-5">
      <div v-for="(piece, index) in this.theProject" class="row m-0" :key="index">
        <transition name="image-in" mode="out-in" appear>
          <ImageSec
            v-if="piece.type === 'photo'"
            :piece="piece"
            :images="piece.stuff.imgSrc"
            :num="index"
            v-on:switch-large="switchLarge"
            :key="piece.link"
          ></ImageSec>

          <VideoSec v-else-if="piece.type === 'video'" :piece="piece" :data-num="index" :key="piece.link"></VideoSec>

          <AudioSec v-else-if="piece.type === 'audio'" :piece="piece" :data-num="index" :key="piece.link"></AudioSec>
        </transition>

        <transition name="info-in" mode="out-in" appear>
          <PieceInfo
            :piece="piece"
            :isPiece="false"
            :key="piece.hiddenTitle"
          ></PieceInfo>
        </transition>
      </div>
    </div>

    <LargeView
      v-if="zoomed"
      :class="{ active: zoomed }"
      :image="require('@/assets/images/' + this.theProject[this.currentZoomed].stuff.imgSrc[0])"
      v-on:switch-large="switchLarge"
    ></LargeView>
  </div>
</template>

<script>
import ImageSec from './media/ImageSec'
import VideoSec from './media/VideoSec'
import AudioSec from './media/AudioSec'
import LargeView from './LargeView'
import PieceInfo from './PieceInfo'

export default {
  name: 'Project',
  components: {
    VideoSec,
    AudioSec,
    ImageSec,
    LargeView,
    PieceInfo
  },
  data () {
    return {
      zoomed: false,
      currentZoomed: 0
    }
  },
  computed: {
    projectName () {
      return this.$route.params.project.replace(/-/g, ' ')
    },
    theProject () {
      return this.$store.state.series[this.projectName]
    }
  },
  methods: {
    switchLarge (x) {
      if (x) this.currentZoomed = x.target.dataset.num
      this.zoomed ? this.zoomed = false : this.zoomed = true
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('setProjCrumb', false)
    next()
  }
}
</script>

<style lang="scss" scoped>
</style>
