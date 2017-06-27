<template>
  <div id="app">
    <div class="page-group">
     <!-- <div class="page page-current" id="main-page">
        <v-header :title="title"></v-header>
        <v-tabar></v-tabar>
        <transition :name="transitionName">
          <router-view></router-view>
        </transition>
      </div>-->
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
      <div class="panel-overlay" v-if="isLogined"></div>
      <user-panel v-if="isLogined"></user-panel>
      <v-loading v-if="isLogined"></v-loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  /*import tabar from './components/tabar.vue'
  import header from './components/header.vue'*/
  import userPanel from './components/userPanel.vue'
  import loading from './components/loading.vue'
  export default {
    data(){
      return {
        transitionName:''
      }
    },
    computed:{
      ...mapGetters([
        'isLogined',
        'isSubPage'
      ]),
      /*title(){
        let pathLength = this.$route.path.split('/').length
        //console.log(this.$route.path.split('/')[pathLength - 1])
        if(pathLength > 2){
          this.$store.dispatch('isSubPage', true)
        }else {
          this.$store.dispatch('isSubPage', false)
        }
        switch (this.$route.path.split('/')[pathLength - 1]){
          case 'train':
            return "训练"
          case 'article':
            return "发现"
          case 'mine':
            return "我的训练"
        }
      }*/
    },
    watch:{
      '$route'(to, from){
        let pathLength = this.$route.path.split('/').length
        if(pathLength > 2){
          this.$store.dispatch('isSubPage', true)
        }else {
          this.$store.dispatch('isSubPage', false)
        }
        let toDepth = to.path.split('/').length
        let fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        if(to.path === '/train' && from.path === '/' || to.path === '/article' && from.path === '/' || to.path === '/mine' && from.path === '/'
          || toDepth <=2 && fromDepth <=2){
          this.transitionName = ' '
        }
      }
    },
    components:{
      /*'v-tabar': tabar,
      'v-header': header,*/
      'user-panel':userPanel,
      'v-loading':loading
    }
  }
</script>

<style>
  @import "../static/css/sm.min.css";
  @import "./pages/css/main.css";
  @import "../static/css/iconfont.css";
  .slide-left-enter-active,
  .slide-right-enter-active{
    transition:transform .3s ease-in-out;
  }
  .slide-left-leave-active,
  .slide-right-leave-active{
    transition:  transform .3s ease-in-out;
  }
  .slide-left-enter,
  .slide-left-leave {
    transform: translateX(100%);
  }
  .slide-right-enter,
  .slide-right-leave {
    transform: translateX(-100%);
  }
</style>
