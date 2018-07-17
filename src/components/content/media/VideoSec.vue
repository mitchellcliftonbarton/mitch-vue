<template>
  <div
    class="piece vid col-12 col-md-9 d-flex flex-column justify-content-center align-items-center"
  >
    <video
      ref="vid"
      :src="require(`@/assets/videos/${piece.stuff.imgSrc}`)"
    >
    </video>
    <div v-if="this.$store.state.isMobile" class="mobile-play" @click="pausePlay()">
      <svg width="25px" x="0px" y="0px" viewBox="0 0 17.6 20.3">
        <g>
          <polygon fill="blue" points="17.6,10.2 0,0 0,20.3"/>
        </g>
      </svg>
    </div>
    <div v-else class="controls d-flex align-items-center">
      <div class="left d-flex">
        <a href="#" @click.prevent="pausePlay()" :key="playing">
          <svg width="12px" v-if="!playing" x="0px" y="0px" viewBox="0 0 17.6 20.3">
            <g>
              <polygon fill="blue" points="17.6,10.2 0,0 0,20.3"/>
            </g>
          </svg>
          <svg width="12px" v-else x="0px" y="0px" viewBox="0 0 17.6 20.3">
            <rect fill="blue" x="3" y="0" width="3" height="20"/>
            <rect fill="blue" x="12" y="0" width="3" height="20"/>
          </svg>
        </a>
        <p>{{ `${current}` }}</p>
      </div>
      <div class="center" @click="setTime($event)">
        <div class="prog">
          <div class="bar" :style="{ transform: `scaleX(${progress})`}"></div>
        </div>
      </div>
      <div class="right d-flex">
        <p>{{ total }}</p>
        <a v-if="!this.$store.state.isMobile" href="#" @click.prevent="enterFull()">
          <svg class="full" width="15px" x="0px" y="0px" viewBox="0 0 17 17">
            <polyline class="st0" points="1,6 1,1 6,1 "/>
            <polyline class="st0" points="6,16 1,16 1,11 "/>
            <polyline class="st0" points="16,6 16,1 11,1 "/>
            <polyline class="st0" points="11,16 16,16 16,11 "/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoSec',
  props: [
    'piece'
  ],
  data () {
    return {
      playing: false,
      muted: false,
      full: false,
      progress: 0,
      total: '',
      current: '0:00'
    }
  },
  computed: {
    isPiece () {
      return this.$route.params.piece
    }
  },
  methods: {
    pausePlay () {
      if (this.$refs.vid.paused || this.$refs.vid.ended) {
        this.$refs.vid.play()
        this.playing = true
      } else {
        this.$refs.vid.pause()
        this.playing = false
      }
    },
    mute () {
      this.$refs.vid.muted = !this.$refs.vid.muted
      this.muted = !this.muted
    },
    enterFull () {
      this.$refs.vid.requestFullscreen()
    },
    checkState () {
      this.$refs.vid.paused ? this.playing = false : this.playing = true
      this.$refs.vid.muted ? this.muted = true : this.muted = false
    },
    setTime (e) {
      let t = (e.offsetX / e.target.clientWidth).toFixed(2)
      t = (t * this.$refs.vid.duration).toFixed(2)
      this.$refs.vid.currentTime = t
    }
  },
  mounted () {
    this.$refs.vid.addEventListener('loadeddata', () => {
      let min = Math.floor(this.$refs.vid.duration / 60)
      this.total = `${min}:${Math.floor(this.$refs.vid.duration - min * 60)}`
    })

    this.$refs.vid.onfullscreenchange = () => {
      if (this.full) this.checkState()
      this.full = !this.full
    }

    this.$refs.vid.addEventListener('timeupdate', () => {
      this.progress = (this.$refs.vid.currentTime / this.$refs.vid.duration).toFixed(4)

      let t = Math.floor(this.$refs.vid.currentTime / 60)
      let m = (this.$refs.vid.currentTime - t * 60).toFixed(0)
      let s = `${t}:${m.length === 1 ? `0${m}` : m}`
      this.current = s
    })
  }
}
</script>

<style lang="scss" scoped>
  @import './../../../assets/scss/mixins/mixins';

  .piece.vid {
    position: relative;
    margin-bottom: 3rem;
  }

  video {
    width: 100%;

    @include breakpoint(md-up) {
      width: 80%;
    }
  }

  .mobile-play {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .controls {
    width: 100%;
    // background: #ccc;
    height: 50px;

    @include breakpoint(md-up) {
      width: 80%;
    }

    a, p {
      font-size: .9rem;
    }

    p {
      color: #b3b3b3;
    }

    .left {
      width: 12%;

      a {
        padding-right: 1rem;
      }
    }

    .center {
      width: 70%;
      margin: 0% 3%;
      height: 100%;
      display: flex;
      align-items: center;

      .prog {
        height: 2px;
        width: 100%;
        background: #ececec;
        position: relative;
        cursor: pointer;

        .bar {
          position: absolute;
          height: 100%;
          width: 100%;
          background: blue;
          display: block;
          top: 0px;
          left: 0px;
          transform-origin: left;
          transition: transform .1s;
        }
      }
    }

    .right {
      width: 12%;
      justify-content: flex-end;

      .full {
        .st0{fill:none;stroke:blue;stroke-width:2;stroke-miterlimit:10;}
      }

      a {
        padding-left: 1rem;
      }
    }
  }
</style>
