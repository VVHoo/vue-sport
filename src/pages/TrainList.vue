<template>
  <div class="page page-current" id="train_list">
    <v-header :title="headTitle"></v-header>
    <div class="content">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import tabar from '../components/tabar.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        headTitle:'合集'
      }
    },
    computed:{
      ...mapGetters([
        'token',
        'trainCurrentPage',
        'trainPageSize',
        'trainLessonSearchType'
      ])
    },
    components:{
      'v-header': header,
      'v-tabar': tabar
    },
    created(){
      let page = {
        searchType: this.trainLessonSearchType,
        pageSize: this.trainPageSize,
        currentPage: this.trainCurrentPage + 1
      }
      this.$store.dispatch('getLessonList', {
        token: this.token,
        page:page
      })
    }
  }
</script>

<style>

</style>
