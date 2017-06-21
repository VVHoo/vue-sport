<template>
  <div id="app">
    <div v-if="isLogined" class="page page-current" id="main-page">
      <v-header :title="title"></v-header>
      <v-tabar></v-tabar>
      <router-view></router-view>
    </div>
    <div class="panel-overlay" v-if="isLogined"></div>
    <user-panel v-if="isLogined"></user-panel>
    <div class="modal-overlay" v-if="isLogined"></div>
    <router-view v-if="!isLogined"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  import tabar from './components/tabar.vue'
  import header from './components/header.vue'
  import userPanel from './components/userPanel.vue'
  export default {
    computed:{
      ...mapGetters([
        'isLogined'
      ]),
      title(){
        switch (this.$route.path.split('/')[1]){
          case 'train':
            return "训练"
              break;
          case 'article':
            return "发现"
              break;
          case 'mine':
            return "我的训练"
              break;
        }
      }
    },
    components:{
      'v-tabar': tabar,
      'v-header': header,
      'user-panel':userPanel
    }
  }
</script>

<style>
  @import "../static/css/sm.min.css";
  @import "./pages/css/main.css";
  @import "../static/css/iconfont.css";
</style>
