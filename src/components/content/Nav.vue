<template>
  <nav class="nav" :class="{ 'open': isOpen }">
    <a v-if="this.$store.state.isMobile" class="menu-button" href="#" @click.prevent="open()">+</a>
    <div class="nav-inner">

      <ul class="index-button" v-if="!this.$store.state.isMobile">
        <li ref="indexLink">
          <a href="#" @click.prevent="indexSwitch()" v-bind:key="this.$store.state.indexView">
            {{ this.$store.state.indexView ? '---' : '==='}}
          </a>
        </li>
      </ul>

      <ul class="head-links">
        <li><router-link class="dir" @click.native="close()" to="/" exact>Mitchell Barton</router-link></li>
        <li><router-link class="dir" @click.native="close()" :to="{ name: 'info' }">Info</router-link></li>
      </ul>

      <ul class="crumbs" v-if="this.$store.state.indexView && !this.$store.state.isMobile">
        <li v-if="this.$store.state.projCrumb" class="oppCurrent">
          <router-link :to="this.$route.path" class="dir">Project - {{ _.startCase(this.$route.params.project) }}</router-link>
        </li>
        <li v-else class="oppCurrent hidden">
          <a href="#">-</a>
        </li>
      </ul>

      <ul class="crumbs" v-else-if="!this.$store.state.indexView && !this.$store.state.isMobile">
        <li v-if="this.$store.state.indexCrumb" class="oppCurrent">
          <router-link :to="this.$route.path" class="dir">Index - {{ this.$route.name === 'info' || this.$route.name === 'home' ? '' : pieceLink.stuff.title }}</router-link>
        </li>
        <li v-else class="oppCurrent hidden">
          <a href="#">-</a>
        </li>
      </ul>

      <ul ref="workLinks" class="work-links" :style="{ maxHeight: `${this.navMaxHeight}px` }">
        <!-- Links for Index View Desktop -->
        <div v-if="this.$store.state.indexView && !this.$store.state.isMobile" class="work-inner-links">
          <li v-for="(piece, index) in this.$store.state.pieces" :key="index">
            <router-link class="dir work-link" :to="{ path: '/work/' + piece.link }" :data-num="index">{{ piece.stuff.title }}</router-link>
          </li>
        </div>

        <!-- Links for Project View Desktop -->
        <div v-else-if="!this.$store.state.indexView && !this.$store.state.isMobile" class="work-inner-links">
          <li v-for="(project, index) in this.$store.state.series" :key="index">
            <router-link
              :to="{ path: '/project/' + project[0].stuff.series }"
              class="dir work-link"
              :data-num="index"
            >
              {{ _.startCase(project[0].stuff.series) }}
            </router-link>
          </li>
        </div>

        <!-- Links for Mobile -->
        <div v-else-if="this.$store.state.isMobile" class="work-inner-links">
          <li class="oppCurrent">
            <router-link to="/work/index" @click.native="close()">Index</router-link>
          </li>
          <li v-for="(project, index) in this.$store.state.series" :key="index">
            <router-link
              :to="{ path: '/project/' + project[0].stuff.series }"
              class="dir"
              @click.native="close()"
            >
              {{ _.startCase(project[0].stuff.series) }}
            </router-link>
          </li>
        </div>
      </ul>
    </div>
  </nav>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Nav',
  data () {
    return {
      isOpen: false,
      navHeight: null,
      linkHeight: null,
      currentLinks: [],
      currentPage: null,
      currentWorkLinks: [],
      currentWorkPage: null
    }
  },
  computed: {
    _ () {
      return _
    },
    pieceLink () {
      return this.$store.state.pieces.find((e) => {
        return e.link === this.$route.params.piece
      })
    },
    visibleLinks () {
      return Math.floor(this.navHeight / this.linkHeight)
    },
    navMaxHeight () {
      return this.visibleLinks * this.linkHeight
    }
  },
  methods: {
    close () {
      if (this.$store.state.isMobile) this.isOpen = false
    },
    open () {
      this.isOpen ? this.isOpen = false : this.isOpen = true
    },
    checkCurrent (e) {
      if (e.classList.contains('router-link-active')) {
        return true
      } else {
        return false
      }
    },
    indexSwitch () {
      if (this.$store.state.indexView) {
        this.$store.dispatch('setIndexView', false)

        if (this.$route.name !== 'home' || this.$route.name !== 'info') {
          this.$store.state.projCrumb ? console.log('yup') : this.$store.dispatch('setIndexCrumb', true)
          this.$store.dispatch('setProjCrumb', false)
        }
      } else {
        // set to index
        this.$store.dispatch('setIndexView', true)

        if (this.$route.name === 'home' || this.$route.name === 'info') {
          console.log('not a proj or piece')
        } else {
          console.log('yes a proj or piece')
          this.$store.state.indexCrumb ? console.log('yup') : this.$store.dispatch('setProjCrumb', true)
          this.$store.dispatch('setIndexCrumb', false)
        }
      }
    },
    arrowRoute (num, event) {
      // this.currentLinks = [...document.querySelectorAll('.dir')]
      this.currentPage = this.currentLinks.findIndex(this.checkCurrent)
      this.currentWorkPage = this.currentWorkLinks.findIndex(this.checkCurrent)
      let nextHref

      switch (num) {
        case 38: // up
          event.preventDefault()
          nextHref = this.currentLinks[this.currentPage - 1].getAttribute('href')
          nextHref = _.trimStart(nextHref, '#')
          this.$router.push({ path: nextHref })
          break
        case 40: // down
          event.preventDefault()
          nextHref = this.currentLinks[this.currentPage + 1].getAttribute('href')
          nextHref = _.trimStart(nextHref, '#')
          this.$router.push({ path: nextHref })
          break
        default:
      }
    }
  },
  mounted () {
    window.addEventListener('keydown', (e) => {
      this.arrowRoute(e.which, e)
    })

    this.navHeight = this.$refs.workLinks.offsetHeight
    this.linkHeight = this.$refs.indexLink.offsetHeight

    this.currentLinks = [...document.querySelectorAll('.dir')]
    this.currentPage = this.currentLinks.findIndex(this.checkCurrent)
    this.currentWorkLinks = [...document.querySelectorAll('.dir.work-link')]
    this.currentWorkPage = this.currentWorkLinks.findIndex(this.checkCurrent)
  }
}
</script>

<style lang="scss">
  @import './../../assets/scss/mixins/mixins';

  .nav {
    position     : fixed;
    left         : 0px;
    top          : 0px;
    width        : 100vw;
    height       : 100vh;
    pointer-events: none;

    @include breakpoint(xs-up) {
      width          : 25vw;
      border-right   : 1px solid #efefef;
      pointer-events : auto;
    }

    &.open {
      pointer-events: auto;

      .nav-inner {
        display: block;
      }

      .menu-button {
        transform: rotate(-45deg);
      }
    }

    .menu-button {
      pointer-events : auto;
      position       : fixed;
      top            : 15px;
      right          : 25px;
      transform      : rotate(0deg);
      transition     : transform .2s;
      font-size      : 20px;
    }

    .nav-inner {
      padding    : 40px 0px 0px 40px;
      display    : none;
      background : white;
      width      : 100%;
      height     : 100%;

      ul {
        margin-bottom: 20px;

        &:last-child {
          margin: 0px;
        }
      }

      @include breakpoint(xs-up) {
        display        : flex;
        width          : auto;
        flex-direction : column;
        padding        : 30px;
        box-sizing     : border-box;
      }

      .oppCurrent {
        &.hidden {
          visibility     : hidden;
          pointer-events : none;
        }
      }

      .work-links {
        // padding       : 10px 0px;
        overflow      : hidden;
        position      : relative;
        border-top    : 1px solid #efefef;
        border-bottom : 1px solid #efefef;
      }

      a.router-link-active {
        background: #e4e4e4;
      }

      a:focus,
      a:active {
        opacity: 1;
      }

      ul {
        li {
          padding: 2px 0px;

          a {
            padding: 2px 4px;
            border-radius: 8px;
          }
        }
      }
    }
  }
</style>
