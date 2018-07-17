<template>
  <div class="work-container">
    <div v-for="(piece, index) in this.$store.state.pieces" :key="index" class="row m-0 piece">
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

    <LargeView
      v-if="zoomed"
      :class="{ active: zoomed }"
      :image="require('@/assets/images/' + this.$store.state.pieces[this.currentZoomed].stuff.imgSrc[0])"
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
  name: 'Index',
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
  methods: {
    switchLarge (x) {
      if (x) this.currentZoomed = x.target.dataset.num
      this.zoomed ? this.zoomed = false : this.zoomed = true
    }
  }
}
</script>
