<template>
  <div class="page page-current" id="train-page">
    <v-header :title="title"></v-header>
    <v-tabar></v-tabar>
    <div class="content">
      <search-bar></search-bar>
      <div class="training_lesson">
        <div class="lesson_wrapper">
          <h3>课程分类</h3>
          <p>丰富的训练课程，规范你的训练过程</p>
        </div>
        <lesson-type-list :lessonTypeList="lessonTypeList"></lesson-type-list>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import tabar from '../components/tabar.vue'
  import header from '../components/header.vue'
  import searchBar from '../components/searchBar.vue'
  import lessonTypeList from '../components/lessonTypeList.vue'
  import { mapGetters } from 'vuex'
  export default {
    data(){
      return {
        title:'训练'
      }
    },
    computed:{
      ...mapGetters([
        'isLogined',
        'lessonTypeList',
        'token'
      ])
    },
    created(){
      if(this.lessonTypeList == 0){
        this.$store.dispatch('getLessonTypeList', this.token)
      }
    },
    components:{
      'v-tabar': tabar,
      'v-header': header,
      'search-bar':searchBar,
      'lesson-type-list': lessonTypeList
    }
  }
</script>

<style scoped>
  .training_lesson{
    background: #ffffff;
    box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  }
  .lesson_wrapper{
    padding: 1.7rem 0;
    text-align: center;
  }
  .lesson_wrapper h3{
    color: #24c789;
    font-size: 0.9rem;
    font-weight: 700;
  }
  .lesson_wrapper p{
    color: #999;
    font-size: 0.7rem;
  }
</style>
