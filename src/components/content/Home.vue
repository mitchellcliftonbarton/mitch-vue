<template>
  <div class="home-container" :style="{ background: currentColor }">
    <transition name="image-in" mode="out-in" appear>
      <div class="inner">
        <p v-if="this.$store.state.isMobile">Click on this button! &rarr;</p>

        <div v-else class="info">
          <div class="row m-0 pt-5 w-100">
            <div class="col-4 offset-2">
              <p class="block">This is version 2.0.4 of this site. To view version 1.0, click <a href="http://v1.mitchellbarton.com/" target="_blank">HERE</a></p>
            </div>
          </div>

          <div class="row m-0 mt-4 w-100">
            <div class="col-4 offset-2 links">
              <ul class="block">
                <li>
                  <router-link to="/" @click.native="changeLevel('e')" class="easy" :class="{ 'active': this.$store.state.level === 'e'}"><span>EASY</span></router-link>
                </li>
                <li>
                  <router-link to="/" @click.native="changeLevel('m')" class="med" :class="{ 'active': this.$store.state.level === 'm'}"><span>MEDIUM</span></router-link>
                </li>
                <li>
                  <router-link to="/" @click.native="changeLevel('h')" class="hard" :class="{ 'active': this.$store.state.level === 'h'}"><span>HARD</span></router-link>
                </li>
                <li>
                  <p>SUPER</p>
                </li>
              </ul>
            </div>
            <div class="col-4">
              <div v-if="this.$store.state.level === 'e'" class="block controls">
                <h2>EASY ~ Level Instructions</h2>
                <ul class="pt-3">
                  <li>Use mouse/clicking to navigate.</li>
                  <li>Toggle between index and projects in top left corner.</li>
                  <li>Click on an image to zoom in or out.</li>
                </ul>
              </div>

              <div v-else-if="this.$store.state.level === 'm'" class="block controls">
                <h2>MEDIUM ~ Level Instructions</h2>
                <ul class="pt-3">
                  <li>Use mouse/clicking to navigate.</li>
                  <li>Toggle between index and projects in top left corner.</li>
                  <li>Click on an image to zoom in or out.</li>
                  <li>Link color = light grey.</li>
                </ul>
              </div>

              <div v-else-if="this.$store.state.level === 'h'" class="block controls">
                <h2>HARD ~ Level Instructions</h2>
                <ul class="pt-3">
                  <!-- <li>Use mouse/clicking to navigate.</li>
                  <li>Toggle between index and projects in top left corner.</li>
                  <li>Click on an image to zoom in or out.</li>
                  <li>Link color = light grey.</li> -->
                </ul>
              </div>
            </div>
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
  methods: {
    changeLevel (level) {
      this.$store.dispatch('setLevel', level)
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

    .links & {
      a {
        border-bottom: none;

        &:focus,
        &:active {
          opacity: 1;
        }

        span {
          border-bottom: 1px solid #c3c3c3;
        }
      }
    }

    &.controls {
      ul {
        list-style: circle;

        li {
          margin-left: 2rem;
        }
      }
    }

    a.active {
      &.easy:after {
        content: '';
        width: 10px;
        height: 10px;
        background: green;
        display: inline-block;
        transform: translateX(10px);
        border-radius: 50%;
      }

      &.med:after {
        content: '';
        width: 10px;
        height: 10px;
        background: blue;
        display: inline-block;
        transform: translateX(10px);
      }

      &.hard:after {
        content: '';
        width: 10px;
        height: 10px;
        background: black;
        display: inline-block;
        transform: translateX(10px) rotate(45deg);
      }
    }
  }
</style>
