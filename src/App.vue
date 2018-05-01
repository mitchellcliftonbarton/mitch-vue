<template>
  <div id="app" class="h-100">
    <router-view/>
    <Mouse></Mouse>
  </div>
</template>

<script>
import store from './store'
import pieces from './content/pieces'
import Mouse from './components/content/Mouse'

export default {
  name: 'App',
  store,
  components: { Mouse },
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
