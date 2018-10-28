<template>
  <div class="cv-container">
    <transition name="image-in" mode="out-in" appear>
      <div class="inner" key="info">
        <div class="personal-info">
          <p>{{ this.content.email }}</p>
          <p v-html="this.content.about"></p>
          <p>View more web/design info <router-link to="/design-dev">here.</router-link></p>
          <p>
            <a :href="this.content.instagram" target="_blank">Instagram</a>
          </p>
        </div>

        <div class="education section">
          <p class="sec-title">Education</p>
          <p class="year">
            <span>{{ this.content.education.year }}</span>
            <span>{{ this.content.education.text }}</span>
          </p>
        </div>

        <div class="solo section">
          <p class="sec-title">Solo Exhibitions</p>
          <div v-for="(year, index) in this.content.solo" :key="index" class="year">
            <p class="year-text">{{ year.year }}</p>
            <div class="shows">
              <p v-for="(show, index) in year.shows" :key="index" v-html="show.text"></p>
            </div>
          </div>
        </div>

        <div class="group section">
          <p class="sec-title">Group Exhibitions</p>
          <div v-for="(year, index) in this.content.group" :key="index" class="year">
            <p class="year-text">{{ year.year }}</p>
            <div class="shows">
              <p v-for="(show, index) in year.shows" :key="index" v-html="show.text"></p>
            </div>
          </div>
        </div>

        <div class="online section">
          <p class="sec-title">Online</p>
          <div class="year">
            <div class="shows">
              <p v-for="(item, index) in this.content.online" :key="index" v-html="item.text"></p>
            </div>
          </div>
        </div>

        <div class="awards section">
          <p class="sec-title">Awards</p>
          <div class="year">
            <div class="shows">
              <p v-for="(item, index) in this.content.awards" :key="index" v-html="item.text"></p>
            </div>
          </div>
        </div>

        <div class="publications section">
          <p class="sec-title">Publications</p>
          <div class="year">
            <div class="shows">
              <p v-for="(item, index) in this.content.publications" :key="index" v-html="item.text"></p>
            </div>
          </div>
        </div>

        <div class="curatorial section">
          <p class="sec-title">Curatorial</p>
          <div class="year">
            <div class="shows">
              <p v-for="(item, index) in this.content.curatorial" :key="index" v-html="item.text"></p>
            </div>
          </div>
        </div>

        <div class="teaching section">
          <p class="sec-title">Teaching</p>
          <div class="year">
            <div class="shows">
              <p v-for="(item, index) in this.content.teaching" :key="index" v-html="item.text"></p>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import info from './../../content/info'

export default {
  name: 'Info',
  data () {
    return {
      content: info
    }
  }
}
</script>

<style lang="scss">
  @import './../../assets/scss/mixins/mixins';

  .cv-container {

    p, span {
      line-height: 1.8em;
    }

    a {
      display       : inline-block;
      color         : black;
      border-bottom : 1px solid #c3c3c3;
      transition    : background .3s, border .3s;

      &:hover {
        border-bottom : 1px solid #969696;
      }
    }

    .personal-info {
      p {
        margin-top : 15px;

        &:first-child {
          margin : 0px;
        }
      }
    }

    .education {
      .year {
        display: flex;

        span:first-child {
          flex: 1 0 5%;
          margin-right: 5%;
        }

        span:last-child {
          flex: 1 0 95%;
        }
      }
    }

    .section {
      margin-top : 50px;

      .sec-title {
        .m & {
          color: #efefef;
        }
      }

      & > p:first-child {
        font-weight: bold;
      }

      .year {
        margin-top : 50px;
        display: flex;

        @include breakpoint(xs-up) {
          margin-top: 20px;
        }

        .year-text {
          flex: 1 0 5%;
          margin-right: 5%;
        }

        .shows {
          // margin-top : 10px;
          flex: 1 0 90%;

          p {
            margin-bottom: 20px;

            @include breakpoint(xs-up) {
              margin-bottom: 0px;
            }

            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }
</style>
