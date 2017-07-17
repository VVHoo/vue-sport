<template>
  <div class="page page-current" id="train-list">
    <v-header :title="headTitle"></v-header>
    <div class="content">
      <ul class="train-lession-list clearfix">
        <router-link :to="{ path:'/train/trainList/' + item.videoId}" tag="li"  v-for="(item, index) in lessonList" :key="item.id">
          <div class="lesson-introduce">
            <img v-lazy="item.coverPath">
          </div>
          <div class="introduce-title">{{item.videoTitle}}</div>
          <div class="pioneer">{{item.videoTag}}</div>
        </router-link>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" :distance="0">
          <span slot="no-more">
            没有更多内容了~
          </span>
        </infinite-loading>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import InfiniteLoading from 'vue-infinite-loading'
  import { mapGetters } from 'vuex'
  import api from '../api/index'
  export default {
    data () {
      return {
        headTitle:'合集',
        lessonList:[]
      }
    },
    computed:{
      ...mapGetters([
        'token',
        'currentPage',
        'pageSize',
        'trainLessonSearchType'
      ])
    },
    components:{
      'v-header': header,
      'infinite-loading':InfiniteLoading
    },
    methods:{
      onInfinite(){
        //console.log('infinite')
        let page = {
          searchType: this.trainLessonSearchType,
          pageSize: this.pageSize,
          currentPage: this.currentPage + 1
        }
        this.$store.dispatch('setLoading', true)
        api.getLessonList(this.token, page)
          .then((res) => {
            console.log(res)
            let alertThis = this.$store
            setTimeout(() => {
              this.$store.dispatch('setLoading', false)
            }, 200)
            if(res.data.status == 401){
              $.alert("token失效,请重新登录", function () {
                alertThis.dispatch('logout')
              });
            }else if(res.data.status == 200){
              this.lessonList = this.lessonList.concat(res.data.data)
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
              this.$store.dispatch('nextPage')
              if(res.data.data.length < 5){
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
              }
            }else if(res.data.status == -2){
              $.alert('已在别的地方登录', function () {
                alertThis.dispatch('logout')
              })
            }
          })
      }
    },
    destroyed(){
      this.$store.dispatch('resetPage')
    }
  }
</script>

<style scoped>
  @import "css/trainList.css";
</style>
