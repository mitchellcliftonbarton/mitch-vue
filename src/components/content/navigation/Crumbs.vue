<template>
  <ul class="crumbs">
    <li v-if="this.$store.state.projCrumb || this.$store.state.indexCrumb" class="oppCurrent">
      <router-link :to="this.$route.path" class="dir">{{ view }}</router-link>
    </li>
    <li v-else class="oppCurrent hidden">
      <a href="#">-</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Crumbs',
  props: [
    'view'
  ]
}
</script>
