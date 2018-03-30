<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store'
import pieces from './content/pieces'

export default {
  name: 'App',
  store,
  beforeCreate () {
    pieces.pieces.forEach((e) => {
      if (this.$store.state.series.hasOwnProperty(e.stuff.series)) {
        this.$store.dispatch('addToSeries', e)
      } else {
        this.$store.dispatch('newSeries', e)
      }
    })

    if (window.matchMedia('(max-width: 815px)').matches) {
      this.$store.dispatch('setIsMobile', true)
    } else {
      this.$store.dispatch('setIsMobile', false)
    }
  }
}
</script>

<style lang="scss">
    @import "assets/scss/main.scss";
</style>
