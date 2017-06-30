<template>
  <div id="app">
    <div class="page-group">
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
      ])
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
        this.transitionName = toDepth < fromDepth ? 'slideRight' : 'slideLeft'
        if(to.path === '/train' && from.path === '/' || to.path === '/article' && from.path === '/' || to.path === '/mine' && from.path === '/'
          || toDepth <=2 && fromDepth <=2){
          this.transitionName = ' '
        }
      },
      isLogined:function () {
        if(!this.isLogined){
          this.$router.replace('/account')
        }
      }
    },
    components:{
      'user-panel':userPanel,
      'v-loading':loading
    }
  }
</script>

<style>
  @import "../static/css/sm.min.css";
  @import "./pages/css/main.css";
  @import "../static/css/iconfont.css";
  /*路由动画，修改SUI*/
  .slideLeft-enter-active{
    animation:pageFromRightToCenter .3s forwards;
  }
  .slideLeft-leave-active{
    animation: pageFromCenterToLeft .3s forwards;
  }
  .slideRight-enter-active{
    animation: pageFromLeftToCenter .3s forwards;
  }
  .slideRight-leave-active{
    animation: pageFromCenterToRight .3s forwards;
    z-index: 2002;
  }

  @keyframes pageFromRightToCenter  {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      opacity: .8;
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes pageFromCenterToLeft{
    from {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      opacity:0.8;
      -webkit-transform: translate3d(-20%, 0, 0);
      transform: translate3d(-20%, 0, 0);
    }
  }
  @keyframes pageFromLeftToCenter {
    from {
      -webkit-transform: translate3d(-20%, 0, 0);
      transform: translate3d(-20%, 0, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes pageFromCenterToRight  {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  @-webkit-keyframes pageFromRightToCenter  {
    from {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      opacity: .8;
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @-webkit-keyframes pageFromCenterToLeft{
    from {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      opacity:0.8;
      -webkit-transform: translate3d(-20%, 0, 0);
      transform: translate3d(-20%, 0, 0);
    }
  }
  @-webkit-keyframes pageFromLeftToCenter {
    from {
      -webkit-transform: translate3d(-20%, 0, 0);
      transform: translate3d(-20%, 0, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @-webkit-keyframes pageFromCenterToRight  {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
