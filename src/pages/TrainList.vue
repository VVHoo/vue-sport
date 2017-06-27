<template>
  <div class="page page-current" id="train_list">
    <v-header :title="headTitle"></v-header>
    <div class="content">
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
  import header from '../components/header.vue'
  import tabar from '../components/tabar.vue'
  export default {
    data () {
      return {
        headTitle:'合集',
        msg: 'Hello Vue!'
      }
    },
    components:{
      'v-header': header,
      'v-tabar': tabar
    }
  }
</script>

<style>

</style>
