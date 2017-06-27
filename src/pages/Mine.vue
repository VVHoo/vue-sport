<template>
  <div class="page page-current" id="mine-page">
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
        title:'我的训练',
        msg: 'Hello MinePage!'
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
