<template>
  <div class="work-container col-12 col-md-9 offset-md-3">
    <div class="inner row">
      <div class="piece col-12 col-md-9">
        <div class="piece-inner">
          <img v-for="(img, index) in this.theImages" :src="img" :key="index">
        </div>
      </div>
      <div class="piece-info col-12 col-md-3">
        <p>{{ this.thePiece.stuff.title }}</p>
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
      let images = []

      this.thePiece.stuff.imgSrc.forEach((x) => {
        let img = require('./../../assets/images/' + x)

        images.push(img)
      })

      return images
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
