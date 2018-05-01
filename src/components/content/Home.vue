<template>
  <div class="home-container col-12 col-md-9 offset-md-3" :style="{ background: currentColor }">
    <transition name="image-in" mode="out-in" appear>
      <div class="inner">
        <p v-if="this.$store.state.isMobile">Click on this button! &rarr;</p>

        <div v-else class="row m-0 pt-5 w-100">
          <div class="col-4 offset-2 links">
            <ul class="block">
              <li>
                <router-link to="/">EASY</router-link>
              </li>
              <li>
                <p>MEDIUM</p>
              </li>
              <li>
                <p>HARD</p>
              </li>
              <li>
                <p>SUPER</p>
              </li>
            </ul>
          </div>
          <div class="col-4">
            <p class="block">This is version 2.0 of this site. To view version 1.0, click <a href="http://v1.mitchellbarton.com/" target="_blank">HERE</a></p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      colors: [
        '#ffff61',
        'red',
        'pink',
        '#79ffb8',
        '#c879ff',
        '#ffa34c'
      ],
      current: null
    }
  },
  computed: {
    currentColor () {
      return this.colors[this.current]
    }
  },
  mounted () {
    this.current = Math.floor(Math.random() * this.colors.length)
  }
}
</script>

<style lang="scss" scoped>
  .block {
    background: white;
    padding: 20px;
    border-radius: 20px;
  }
</style>
