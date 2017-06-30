<template>
  <div class="page page-current" id="train-lesson">
    <v-header :title="title"></v-header>
    <div class="content">
      <div class="lesson-banner" v-if="videoList.length">
        <img v-lazy="videoList[0].coverImg">
        <div class="lesson-title">{{videoList[0].subVideoTitle}}</div>
        <div class="pioneer">2人训练</div>
        <button class="button add-button">加入训练</button>
      </div>
      <div class="list-block">
        <ul class="list-container">
          <li v-for="(item, index) in videoList" class="item-content">
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
        'queryLessonId'
      ])
    },
    created(){
      let params = {
        token:this.token,
        videoId:this.queryLessonId
      }
      //this.$store.dispatch('getCollectStatus', params).then(() => {this.$store.dispatch('getVideoList', params)})
      this.$store.dispatch('getVideoList', params)
    },
    components:{
      'v-header': header
    }
  }
</script>

<style scoped>
  @import "css/trainLesson.css";
</style>
