<template>
  <div class="main-container container-fluid h-100">
    <div class="row h-100">
      <Nav></Nav>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from './content/Nav'

export default {
  name: 'MainContainer',
  components: {
    Nav
  }
}
</script>

<style lang="scss">
</style>
