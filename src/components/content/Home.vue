<template>
  <div class="home-container">
    <div class="inner">
      <!-- <p v-if="!this.$store.state.isMobile"></p> -->
      <p v-if="this.$store.state.isMobile">Click on this button! &rarr;</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
