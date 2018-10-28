<template>
  <div class="container">
    <div class="website-1 site">
      <iframe :src="random1" allowfullscreen="false"></iframe>
    </div>
    <div class="website-2 site">
      <iframe :src="random2" allowfullscreen="false"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TwoWebsitesInOne',
  data () {
    return {
      websites: [
        'http://www.foxnews.com/',
        'https://www.nytimes.com/',
        'https://www.washingtonpost.com/',
        'http://www.espn.com/',
        'https://bleacherreport.com/',
        'https://www.drudgereport.com/',
        'http://www.latimes.com/',
        'https://www.bostonglobe.com/'
      ],
      random1: null,
      random2: null
    }
  },
  mounted () {
    this.random1 = this.websites[Math.floor(Math.random() * this.websites.length)]

    let nextRandom = this.websites[Math.floor(Math.random() * this.websites.length)]

    do {
      nextRandom = this.websites[Math.floor(Math.random() * this.websites.length)]
    } while (this.random1 === nextRandom)

    this.random2 = nextRandom
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    display: flex;
    padding: 0px;
    margin: 0px;
    max-width: none;

    .site {
      width: 50%;
      height: 100%;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
