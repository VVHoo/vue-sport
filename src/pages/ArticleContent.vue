<template>
  <div class="page page-current" id="article-content">
    <v-header :title="headTitle"></v-header>
    <div class="content">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        headTitle:'文章详情'
      }
    },
    computed:{
      ...mapGetters([
        'token',
        'articleContent'
      ])
    },
    created(){
      /*this.$store.dispatch('getArticleContent', {
        token:this.token,
        articleId: this.$route.params.articleId
      })*/
    },
    components:{
      'v-header': header
    }
  }
</script>

<style>

</style>
