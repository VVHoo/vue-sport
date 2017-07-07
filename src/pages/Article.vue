<template>
  <div class="page page-current" id="article-page">
    <v-header :title="title"></v-header>
    <v-tabar></v-tabar>
    <div class="content">
      <article-swiper :swiperList="swiperList"></article-swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import tabar from '../components/tabar.vue'
  import header from '../components/header.vue'
  import articleSwiper from '../components/articleSwiper.vue'
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
        'token'
      ])
    },
    created(){
      console.log(this.swiperList)
      if(this.swiperList.length == 0){
        this.$store.dispatch('getSwiperList', this.token)
      }
    },
    components:{
      'v-tabar': tabar,
      'v-header': header,
      'article-swiper': articleSwiper
    }
  }
</script>

<style>

</style>
