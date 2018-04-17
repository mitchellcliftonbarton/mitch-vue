<template>
  <div class="row">
    <div class="piece col-12 col-md-9 d-flex flex-column justify-content-center align-items-center">
      <img
        v-for="(img, index) in images"
        :src="require('@/assets/images/' + img)"
        :key="index" class="pb-5"
        :data-num="num"
        @click="$emit('switch-large', $event)">
    </div>
    <div class="piece-info col-12 col-md-3">
      <p>{{ piece.stuff.title }}</p>
      <p>{{ piece.stuff.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageSec',
  props: [
    'piece',
    'images',
    'num'
  ]
}
</script>
