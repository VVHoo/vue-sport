<template>
  <div class="page page-current" id="article-list">
    <v-header :title="headTitle"></v-header>
    <div class="content">
    </div>
  </div>
</template>

<script>
  import header from '../components/header.vue'
  export default {
    data () {
      return {
        headTitle:'合集'
      }
    },
    components:{
      'v-header': header
    }
  }
</script>

<style>

</style>
