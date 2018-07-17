<template>
    <div
      class="piece-info col-12 col-md-3 d-flex flex-column"
      :key="piece.hiddenTitle"
      :class="{ 'pt-5': this.isPiece }"
    >
      <div v-if="this.isPiece" class="mb-5 prev-next">
        <router-link class="prev-link" v-if="this.prevLink" :to="this.prevLink">&#8604;</router-link>
        <router-link class="next-link" v-if="this.nextLink" :to="this.nextLink">&#8605;</router-link>
      </div>
      <div>
        <p>{{ piece.stuff.title }}</p>
        <p>{{ piece.stuff.date }}</p>
        <p class="mt-3">
          <span v-if="this.isPiece">From </span>
          <router-link :to="!this.isPiece ? `/work/${piece.link}` : `/project/${piece.stuff.series.replace(/\s+/g, '-').toLowerCase()}`">
            {{ this.isPiece ? piece.stuff.series.replace(/\b\w/g, l => l.toUpperCase()) : '+' }}
          </router-link>
        </p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PieceInfo',
  props: [
    'piece',
    'isPiece'
  ],
  computed: {
    pieceIndex () {
      return this.$store.state.pieces.findIndex(s => s.link === this.isPiece)
    },
    nextLink () {
      return (this.pieceIndex + 1) === this.$store.state.pieces.length
        ? false
        : `/work/${this.$store.state.pieces[this.pieceIndex + 1].link}`
    },
    prevLink () {
      return this.pieceIndex === 0 ? null : `/work/${this.$store.state.pieces[this.pieceIndex - 1].link}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .prev-next {
    a {
      font-size: 1.4em;
      cursor: pointer;
    }
  }
</style>
