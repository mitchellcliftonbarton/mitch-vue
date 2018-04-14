<template>
  <ul class="work-links">
    <div class="work-inner-links">
      <li v-if="this.$store.state.isMobile" class="oppCurrent">
        <router-link to="/work/index" @click.native="closeMenu()">Index</router-link>
      </li>

      <li v-for="(piece, index) in work" :key="index">
        <router-link
          class="dir"
          :class="{ 'work-link': !$store.state.isMobile }"
          :to="!Array.isArray(piece) ? `/work/${piece.link}` : `/project/${piece[0].stuff.series.replace(/\s+/g, '-').toLowerCase()}`"
          :data-num="index"
          @click.native="closeMenu()"
        >
          <p>{{ !Array.isArray(piece) ? piece.stuff.title : piece[0].stuff.series.replace(/\b\w/g, l => l.toUpperCase()) }}</p>
        </router-link>
      </li>
    </div>
  </ul>
</template>

<script>
import { bus } from '@/consts.js'

export default {
  name: 'WorkLinks',
  props: [
    'work'
  ],
  methods: {
    closeMenu () {
      bus.$emit('closingMenu')
    }
  }
}
</script>
