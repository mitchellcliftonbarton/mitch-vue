<template>
  <div class="home-container">
    <div class="inner">
      <p v-if="!this.$store.state.isMobile">Use arrow keys to navigate</p>
      <p v-else>Click on this button! &rarr;</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss">
</style>
