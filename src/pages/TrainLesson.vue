<template>
  <div class="page page-current" id="train-lesson">
    <v-header :title="title"></v-header>
    <div class="content">
      <div class="lesson-banner" v-if="videoList.length">
        <img v-lazy="videoList[0].coverImg">
        <div class="lesson-title">{{videoList[0].subVideoTitle}}</div>
        <!--<div class="pioneer">{{videoList[0].videoTag}}</div>-->
        <button class="button add-button" v-if="!collectStatus" @click="collectLesson">加入训练</button>
        <button class="button add-button disabled" disabled="disabled" v-if="collectStatus">已收藏</button>
      </div>
      <div class="list-block">
        <ul class="list-container">
          <li v-for="(item, index) in videoList" class="item-content" @click="openVideoPage(item.subVideoId)">
            <div class="item-title">{{item.subVideoTitle}}</div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        title:'课程训练'
      }
    },
    computed:{
      ...mapGetters([
        'videoList',
        'token',
        'queryLessonId',
        'collectStatus'
      ])
    },
    created(){
      let params = {
        token:this.token,
        videoId:this.queryLessonId
      }
      this.$store.dispatch('getCollectStatus', params)
        .then(() => {
          this.$store.dispatch('getVideoList', params)
        })
    },
    methods:{
      collectLesson(){
        let params = {
          token:this.token,
          videoId:this.queryLessonId
        }
        this.$store.dispatch('collectLesson', params)
      },
      openVideoPage(subVideoId){
        //console.log('open')
        //$.popup('.video-container')
        this.$store.dispatch('getCurrentVideo', subVideoId)
          .then(() => {
            this.$store.dispatch('setVideoPopup', true)
          })
      }
    },
    components:{
      'v-header': header
    }
  }
</script>

<style scoped>
  @import "css/trainLesson.css";
</style>
