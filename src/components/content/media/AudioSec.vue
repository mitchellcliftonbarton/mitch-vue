<template>
  <div class="row">
    <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
      <audio
        :src="require(`@/assets/audio/${piece.stuff.imgSrc}`)"
        controls
        class="mb-5"
      >
    </audio>
    </div>
    <div class="piece-info col-12 col-md-3">
      <p>{{ piece.stuff.title }}</p>
      <p>{{ piece.stuff.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AudioSec',
  props: [
    'piece'
  ]
}
</script>
