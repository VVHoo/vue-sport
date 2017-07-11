<template>
  <div class="page page-current" id="article-content">
    <v-header :title="title"></v-header>
    <v-tabar></v-tabar>
    <div class="content">
      <article-swiper :swiperList="swiperList"></article-swiper>
      <article-type-list :articleTypeList="articleTypeList"></article-type-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import tabar from '../components/tabar.vue'
  import header from '../components/header.vue'
  import articleSwiper from '../components/articleSwiper.vue'
  import articleTypeList from '../components/articleTypeList.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        title:'发现'
      }
    },
    computed:{
      ...mapGetters([
        'swiperList',
        'articleTypeList',
        'token'
      ])
    },
    created(){
      //console.log(this.swiperList)
      if(this.swiperList.length == 0 || this.articleTypeList.length == 0){
        this.$store.dispatch('getSwiperList', this.token)
          .then(() => {
            this.$store.dispatch('getArticleTypeList', this.token)
          })
      }
    },
    components:{
      'v-tabar': tabar,
      'v-header': header,
      'article-swiper': articleSwiper,
      'article-type-list':articleTypeList
    }
  }
</script>

<style>

</style>
