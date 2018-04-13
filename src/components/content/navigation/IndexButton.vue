<template>
  <ul class="index-button">
    <li>
      <a href="#" @click.prevent="indexSwitch()" :key="this.$store.state.indexView">
        {{ this.$store.state.indexView ? '---' : '==='}}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'IndexButton',
  methods: {
    indexSwitch () {
      if (this.$store.state.indexView) {
        this.$store.dispatch('setIndexView', false)

        if (this.$route.name === 'home' || this.$route.name === 'info') {
          // return
        } else {
          this.$store.state.projCrumb ? console.log('yup') : this.$store.dispatch('setIndexCrumb', true)
          this.$store.dispatch('setProjCrumb', false)
        }
      } else {
        this.$store.dispatch('setIndexView', true)

        if (this.$route.name === 'home' || this.$route.name === 'info') {
          // return
        } else {
          this.$store.state.indexCrumb ? console.log('yup') : this.$store.dispatch('setProjCrumb', true)
          this.$store.dispatch('setIndexCrumb', false)
        }
      }
    }
  }
}
</script>
