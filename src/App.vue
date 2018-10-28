<template>
  <div id="app" class="h-100" :class="`${this.$store.state.level}`">
    <router-view/>
    <Mouse v-if="!this.$store.state.isMobile"></Mouse>
  </div>
</template>

<script>
import store from './store'
import Mouse from './components/content/Mouse'
import _ from 'lodash'
import pieces from './content/pieces'

export default {
  name: 'App',
  store,
  components: { Mouse },
  beforeCreate () {
    this.$store.dispatch('setPieces', pieces.pieces)

    if (_.isEmpty(this.$store.state.series)) {
      this.$store.state.pieces.forEach((e) => {
        this.$store.state.series.hasOwnProperty(e.stuff.series)
          ? this.$store.dispatch('addToSeries', e)
          : this.$store.dispatch('newSeries', e)
      })
    } else {
      this.$store.dispatch('resetSeries')
      this.$store.state.pieces.forEach((e) => {
        this.$store.state.series.hasOwnProperty(e.stuff.series)
          ? this.$store.dispatch('addToSeries', e)
          : this.$store.dispatch('newSeries', e)
      })
    }

    window.matchMedia('(max-width: 815px)').matches
      ? this.$store.dispatch('setIsMobile', true)
      : this.$store.dispatch('setIsMobile', false)
  },
  methods: {
    preload () {
      for (const p of this.$store.state.pieces) {
        for (const i of p.stuff.imgSrc) {
          const img = new Image()
          img.src = i
        }
      }
    }
  },
  mounted () {
    if (this.$store.state.isMobile) this.$store.dispatch('setLevel', 'e')
    this.preload()
  }
}
</script>

<style lang="scss">
  @import "assets/scss/main.scss";
</style>
