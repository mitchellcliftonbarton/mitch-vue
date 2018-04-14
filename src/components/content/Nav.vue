<template>
  <nav class="nav col-12 col-md-3 p-0" :class="{ 'open': isOpen }">
    <a v-if="this.$store.state.isMobile" class="menu-button" href="#" @click.prevent="open()">+</a>
    <div class="nav-inner">

      <IndexButton v-if="!this.$store.state.isMobile"></IndexButton>

      <ul class="head-links">
        <li ref="nameLink">
          <router-link
            class="dir"
            @click.native="close()"
            to="/"
            exact
          >
          Mitchell Barton
          </router-link>
        </li>
        <li>
          <router-link
            class="dir"
            @click.native="close()"
            :to="{ name: 'info' }"
          >
          Info
          </router-link>
        </li>
      </ul>

      <Crumbs v-if="!this.$store.state.isMobile" :view="this.$store.state.indexView ? this.crumbIndexData : this.crumbProjectData"></Crumbs>

      <WorkLinks
        v-if="!this.$store.state.isMobile"
        ref="workLinks"
        :style="{ maxHeight: `${this.navMaxHeight}px` }"
        :work="this.$store.state.indexView ? this.$store.state.pieces : this.$store.state.series"
      ></WorkLinks>

      <WorkLinks
        v-else
        ref="workLinks"
        :work="this.$store.state.series"
      ></WorkLinks>
    </div>
  </nav>
</template>

<script>
import _ from 'lodash'
import IndexButton from './navigation/IndexButton'
import Crumbs from './navigation/Crumbs'
import WorkLinks from './navigation/WorkLinks'
import { bus } from './../../consts.js'

export default {
  name: 'Nav',
  components: {
    IndexButton,
    Crumbs,
    WorkLinks
  },
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
    crumbIndexData () {
      return `Project - ${_.startCase(this.$route.params.project)}`
    },
    crumbProjectData () {
      if (this.pieceLink) {
        return `Index - ${this.$route.name === 'info' || this.$route.name === 'home' ? '' : this.pieceLink.stuff.title}`
      } else {
        return false
      }
    },
    pieceLink () {
      if (!this.$store.state.indexView) {
        return this.$store.state.pieces.find((e) => {
          return e.link === this.$route.params.piece
        })
      } else {
        return false
      }
    },
    visibleLinks () {
      return Math.floor(this.navHeight / this.linkHeight)
    },
    navMaxHeight () {
      return this.visibleLinks * this.linkHeight
    },
    navOverflow () {
      return this.currentPage > this.visibleLinks
    },
    navPosition () {
      if (this.navOverflow) {
        let x = (this.currentPage - this.visibleLinks) * this.linkHeight
        return x
      } else {
        return false
      }
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
    arrowRoute (num, event) {
      // this.currentLinks = [...document.querySelectorAll('.dir')]
      // this.currentPage = this.currentLinks.findIndex(this.checkCurrent)
      // this.currentWorkPage = this.currentWorkLinks.findIndex(this.checkCurrent)
      // let nextHref
      //
      // switch (num) {
      //   case 38: // up
      //     event.preventDefault()
      //     console.log('going up')
      //     nextHref = this.currentLinks[this.currentPage - 1].getAttribute('href')
      //     nextHref = _.trimStart(nextHref, '#')
      //     this.$router.push({ path: nextHref })
      //     break
      //   case 40: // down
      //     event.preventDefault()
      //     console.log('going down')
      //     nextHref = this.currentLinks[this.currentPage + 1].getAttribute('href')
      //     nextHref = _.trimStart(nextHref, '#')
      //     this.$router.push({ path: nextHref })
      //     break
      //   default:
      // }
    }
  },
  mounted () {
    window.addEventListener('keydown', (e) => {
      // this.arrowRoute(e.which, e)
    })

    bus.$on('closingMenu', () => {
      this.close()
    })

    // this.navHeight = this.$refs.workLinks.$el.offsetHeight
    // this.linkHeight = this.$refs.nameLink.offsetHeight
    //
    // this.currentLinks = [...document.querySelectorAll('.dir')]
    // this.currentPage = this.currentLinks.findIndex(this.checkCurrent)
    // this.currentWorkLinks = [...document.querySelectorAll('.dir.work-link')]
    // this.currentWorkPage = this.currentWorkLinks.findIndex(this.checkCurrent)
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
      // width          : 25vw;
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
        overflow-x    : hidden;
        overflow-y    : auto;
        position      : relative;
        border-top    : 1px solid #efefef;
        border-bottom : 1px solid #efefef;

        &:after {
          content: '';
          position: fixed;
          width: 100%;
          bottom: 0px;
          background: linear-gradient(#ffffff00, white);
          height: 100px;
          pointer-events: none;
        }
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
