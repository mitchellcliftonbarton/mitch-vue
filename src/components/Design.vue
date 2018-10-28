<template>
  <div class="cv-container">
    <div class="inner">
      <p v-html="content.info"></p>
    </div>
  </div>
</template>

<script>
import design from '@/content/design'

export default {
  name: 'Design',
  data () {
    return {
      content: design
    }
  }
}
</script>

<style lang="scss">
</style>
