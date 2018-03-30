<template>
  <div class="work-container">
    <div class="inner">
      <div v-for="(piece, index) in this.theProject" :key="index" class="piece">
        <img :src="require('./../../assets/images/' + piece.stuff.imgSrc)">
        <p>{{ piece.stuff.title }}</p>
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

<style lang="scss">
</style>
