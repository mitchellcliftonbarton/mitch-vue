<template>
  <div class="row">
    <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
      <video
        :src="require(`@/assets/videos/${piece.stuff.imgSrc}`)"
        width="560"
        height="315"
        controls
        class="mb-5"
      >
      </video>
    </div>
    <div class="piece-info col-12 col-md-3">
      <p>{{ piece.stuff.title }}</p>
      <p>{{ piece.stuff.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoSec',
  props: [
    'piece'
  ]
}
</script>
