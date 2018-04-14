<template>
  <div class="work-container col-12 col-md-9 offset-md-3">
    <div v-if="this.thePiece.type === 'photo'" class="inner row m-0 pt-5">
      <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
        <img v-for="(img, index) in this.theImages" :src="img" :key="index" class="pb-5">
      </div>
      <div class="piece-info col-12 col-md-3">
        <p>{{ this.thePiece.stuff.title }}</p>
        <p>{{ this.thePiece.stuff.date }}</p>
      </div>
    </div>

    <div v-else-if="this.thePiece.type === 'video'" class="inner row m-0 pt-5">
      <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
        <video
          :src="require(`./../../assets/videos/${this.thePiece.stuff.imgSrc}`)"
          width="560"
          height="315"
          controls
        >
        </video>
      </div>
      <div class="piece-info col-12 col-md-3">
        <p>{{ this.thePiece.stuff.title }}</p>
        <p>{{ this.thePiece.stuff.date }}</p>
      </div>
    </div>

    <div v-else-if="this.thePiece.type === 'audio'" class="inner row m-0 pt-5">
      <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
        <audio
          :src="require(`./../../assets/audio/${this.thePiece.stuff.imgSrc}`)"
          controls
        >
      </audio>
      </div>
      <div class="piece-info col-12 col-md-3">
        <p>{{ this.thePiece.stuff.title }}</p>
        <p>{{ this.thePiece.stuff.date }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Work',
  computed: {
    thePiece () {
      return this.$store.state.pieces.find((e) => {
        return e.link === this.$route.params.piece
      })
    },
    theImages () {
      if (this.thePiece.type === 'video') {
        return false
      } else {
        let images = []

        this.thePiece.stuff.imgSrc.forEach((x) => {
          let img = require('./../../assets/images/' + x)

          images.push(img)
        })

        return images
      }
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('setIndexCrumb', false)
    next()
  }
}
</script>

<style lang="scss" scoped>
  .piece-info {
    p {
      // color: gray;
    }
  }
</style>
