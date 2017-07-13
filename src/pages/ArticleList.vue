<template>
  <div class="page page-current" id="article-list">
    <v-header :title="headTitle"></v-header>
    <div class="content">
      <div class="cover-banner">
        <div class="cover-header">
          <div class="sub-content"><h2 class="page-title">{{this.$route.params.articleType}}</h2><p class="page-discription">健身先健脑</p></div>
        </div>
      </div>
      <div class="list-layout">
        <router-link :to="{ path:'/article/articleList/' + item.articleId}" class="article-box" v-for="(item, index) in articleList" tag="div" :key="item.id">
          <div class="article-header"><img v-lazy="item.imgPath"></div>
          <div class="article-content"><h3>运动后膝痛别光静养,这份自救指南请私藏</h3><p>针对跑、跳及球类运动者的..</p></div>
        </router-link>
        <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
          <span slot="no-more">
            没有更多内容了~
          </span>
        </infinite-loading>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import InfiniteLoading from 'vue-infinite-loading'
  import api from '../api/index'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        headTitle:'合集',
        articleList:[]
      }
    },
    computed:{
      ...mapGetters([
        'token',
        'articleListCurrentPage',
        'articleListPageSize'
      ])
    },
    components:{
      'v-header': header,
      'infinite-loading': InfiniteLoading
    },
    methods:{
      onInfinite(){
        //console.log('infinite')
        let page = {
          searchType: this.$route.params.articleType,
          pageSize: this.articleListPageSize,
          currentPage: this.articleListCurrentPage + 1
        }
        this.$store.dispatch('setLoading', true)
        api.getArticleList(this.token, page)
          .then((res) => {
            //console.log(res)
            let alertThis = this.$store
            setTimeout(() => {
              this.$store.dispatch('setLoading', false)
            }, 200)
            if(res.data.status == 401){
              $.alert("token失效,请重新登录", function () {
                alertThis.dispatch('logout')
              });
            }else if(res.data.status == 200){
              if(res.data.data.length){
                this.articleList = this.articleList.concat(res.data.data)
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                this.$store.dispatch('nextArticleListPage')
                if(res.data.data.length < 5){
                  this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                }
              }else{
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
      this.$store.dispatch('resetArticlePage')
    }
  }
</script>

<style scoped>
  @import "css/articleList.css";
</style>
