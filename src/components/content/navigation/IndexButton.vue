<template>
  <ul class="index-button">
    <li>
      <a href="#" @click.prevent="indexSwitch()" :key="this.$store.state.indexView">
        <span v-if="this.$store.state.level === 'e'">View as - {{ this.$store.state.indexView ? 'Projects' : 'Index'}}</span>
        <span v-else-if="this.$store.state.level === 'm'">{{ this.$store.state.indexView ? '===' : '---'}}</span>
        <span v-else-if="this.$store.state.level === 'h'">{{ this.$store.state.indexView ? '=' : '-'}}</span>
      </a>
      <a href="#" class="menu-close" @click.prevent="closeMenu()">{{ isOpen ? `&larr;` : `&rarr;` }}</a>
    </li>
  </ul>
</template>

<script>
import { bus } from '@/consts.js'

export default {
  name: 'IndexButton',
  props: [
    'isOpen'
  ],
  methods: {
    indexSwitch () {
      if (this.$store.state.indexView) {
        this.$store.dispatch('setIndexView', false)

        if (this.$route.name !== 'home' && this.$route.name !== 'info') {
          if (this.$store.state.projCrumb) this.$store.dispatch('setIndexCrumb', true)
          this.$store.dispatch('setProjCrumb', false)
        }
      } else {
        this.$store.dispatch('setIndexView', true)

        if (this.$route.name !== 'home' && this.$route.name !== 'info') {
          if (this.$store.state.indexCrumb) this.$store.dispatch('setProjCrumb', true)
          this.$store.dispatch('setIndexCrumb', false)
        }
      }
    },
    closeMenu () {
      bus.$emit('close-menu')
    }
  }
}
</script>
