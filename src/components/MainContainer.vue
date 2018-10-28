<template>
  <div class="main-container container-fluid h-100">
    <div class="row h-100">
      <Nav
        v-on:menu-toggle="navOpen = !navOpen"
        :isOpen="navOpen"
      ></Nav>
      <router-view class="col-12 content" :class="{ 'open': navOpen }"></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './content/Nav'
import { bus } from '@/consts.js'

export default {
  name: 'MainContainer',
  components: {
    Nav
  },
  data () {
    return {
      navOpen: false
    }
  },
  mounted () {
    bus.$on('close-menu', () => {
      this.navOpen = !this.navOpen
    })
  }
}
</script>

<style lang="scss">
  .content {
    padding-left: 0%;
    transition: padding .3s;
    position: relative;

    &.open {
      padding-left: 25%;
    }
  }
</style>
