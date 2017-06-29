<template>
  <div class="page page-current" id="train_list">
    <v-header :title="headTitle"></v-header>
    <div class="content">
      <ul class="train_lession_list clearfix">
        <router-link to="/train/trainList/trainLesson" tag="li"  v-for="(item, index) in lessonList" :key="item.id">
          <div class="lesson_introduce">
            <img v-lazy="item.coverPath">
          </div>
          <div class="introduce_title">{{item.videoTitle}}</div>
          <div class="pioneer">2人训练</div>
        </router-link>
        <div v-if="lessonList.length == 0">暂时无内容</div>
      </ul>
      <scroll-loading></scroll-loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import tabar from '../components/tabar.vue'
  import scrollLoading from '../components/scrollLoading.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        headTitle:'合集'
      }
    },
    computed:{
      ...mapGetters([
        'token',
        'trainCurrentPage',
        'trainPageSize',
        'trainLessonSearchType',
        'lessonList'
      ])
    },
    components:{
      'v-header': header,
      'v-tabar': tabar,
      'scroll-loading': scrollLoading
    },
    created(){
      let page = {
        searchType: this.trainLessonSearchType,
        pageSize: this.trainPageSize,
        currentPage: this.trainCurrentPage + 1
      }
      this.$store.dispatch('getLessonList', {
        token: this.token,
        page:page
      })
    },
    destroyed(){
      this.$store.dispatch('resetTrainPage')
    }
  }
</script>

<style scoped>
  @import "css/trainList.css";
</style>
