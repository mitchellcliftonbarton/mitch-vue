<template>
  <div class="row">
    <transition name="image-in" mode="out-in" appear>
      <div
        class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center"
        :key="piece.link"
      >
        <video
          :src="require(`@/assets/videos/${piece.stuff.imgSrc}`)"
          width="560"
          height="315"
          controls
          class="mb-5"
        >
        </video>
      </div>
    </transition>
    <transition name="info-in" mode="out-in" appear>
      <div
        class="piece-info col-12 col-md-3"
        :key="piece.hiddenTitle"
      >
        <p>{{ piece.stuff.title }}</p>
        <p>{{ piece.stuff.date }}</p>
      </div>
    </transition>
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
