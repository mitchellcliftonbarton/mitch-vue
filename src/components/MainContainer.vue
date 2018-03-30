<template>
  <div class="main-container">
    <Nav></Nav>
    <router-view></router-view>
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

  .main-container {
    display         : flex;
    height          : 100%;
    justify-content : flex-end;
  }
</style>
