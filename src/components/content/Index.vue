<template>
  <div class="work-container">
    <div v-for="(piece, index) in this.$store.state.pieces" :key="index" class="piece">
      <img :src="require('./../../assets/images/' + piece.stuff.imgSrc)">
      <p>{{ piece.stuff.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>

<style lang="scss">
</style>
