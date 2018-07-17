<template>
  <div class="row">
    <div class="text col-12 col-md-9 offset-md-3 mt-5">
      <p v-html="piece.stuff.text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PieceText',
  props: [
    'piece'
  ]
}
</script>
