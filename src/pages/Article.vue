<template>
  <div class="page page-current" id="article-page">
    <v-header :title="title"></v-header>
    <v-tabar></v-tabar>
    <div class="content">
      {{msg}}
    </div>
  </div>
</template>

<script>
  import tabar from '../components/tabar.vue'
  import header from '../components/header.vue'
  export default {
    data () {
      return {
        title:'发现',
        msg: 'Hello ArticlePage!'
      }
    },
    components:{
      'v-tabar': tabar,
      'v-header': header
    }
  }
</script>

<style>

</style>
