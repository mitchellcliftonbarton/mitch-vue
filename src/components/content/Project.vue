<template>
  <div class="work-container col-12 col-md-9 offset-md-3">
    <div class="inner">
      <div v-for="(piece, index) in this.theProject" class="project-piece" :key="index">
        <div v-for="(photo, idx) in piece.stuff.imgSrc" class="piece" :key="idx">
          <img :src="require('./../../assets/images/' + photo)">
          <p>{{ piece.stuff.title }}</p>
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
      return this.$route.params.project
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
