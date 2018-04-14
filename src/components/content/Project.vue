<template>
  <div class="work-container col-12 col-md-9 offset-md-3">
    <div class="inner pt-5">
      <div v-for="(piece, index) in this.theProject" class="m-0" :key="index">
        <div v-if="piece.type === 'photo'" class="row">
          <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
            <img v-for="(img, idx) in piece.stuff.imgSrc" :src="require('./../../assets/images/' + img)" :key="idx" class="pb-5">
          </div>
          <div class="piece-info col-12 col-md-3">
            <p>{{ piece.stuff.title }}</p>
            <p>{{ piece.stuff.date }}</p>
          </div>
        </div>

        <div v-else-if="piece.type === 'video'" class="row">
          <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
            <video
              :src="require(`./../../assets/videos/${piece.stuff.imgSrc}`)"
              width="560"
              height="315"
              controls
              class="mb-5"
            >
            </video>
          </div>
          <div class="piece-info col-12 col-md-3">
            <p>{{ piece.stuff.title }}</p>
            <p>{{ piece.stuff.date }}</p>
          </div>
        </div>

        <div v-else-if="piece.type === 'audio'" class="row">
          <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
            <video
              :src="require(`./../../assets/audio/${piece.stuff.imgSrc}`)"
              controls
              class="mb-5"
            >
            </video>
          </div>
          <div class="piece-info col-12 col-md-3">
            <p>{{ piece.stuff.title }}</p>
            <p>{{ piece.stuff.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
  computed: {
    projectName () {
      return this.$route.params.project.replace(/-/g, ' ')
    },
    theProject () {
      return this.$store.state.series[this.projectName]
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$store.dispatch('setProjCrumb', false)
    next()
  }
}
</script>

<style lang="scss" scoped>
  .project-piece {
    // border: 1px solid red;
  }
</style>
