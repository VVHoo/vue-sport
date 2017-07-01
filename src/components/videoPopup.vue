<template>
  <div class="popup video-container" v-show="videoContent">
    <a class="icon pull-left iconfont icon-jiantou-copy-copy pull-down" @click="closePopup"></a>
    <div class="content-block video-box">
      <div class="video-title">{{videoContent.subVideoTitle}}</div>
      <div class="video">

      </div>
      <div class="lesson-text">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters([
        'videoContent'
      ])
    },
    methods:{
      closePopup(){
        $.closeModal()
      }
    }
  }
</script>

<style scoped>
  .video-container{
    background: #444542;
  }
  .video-container .video{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  .video-title, .lesson-text > ul{
    color: #ffffff;
  }
  .video-title{
    padding-bottom: 0.5rem;
    margin-bottom:0.5rem;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    font-size:1rem;
  }
  .pull-down{
    color: #797B87;
    font-size:1.4rem;
    margin: 0.5rem 0.75rem;
  }
  .video-box{
    margin-top:3.2rem;
  }
  .lesson-text{
    margin-top:1.5rem;
    font-size: 0.75rem;
  }
  .lesson-text h3{
    margin-bottom:0.5rem;
    font-size:0.75rem;
    color: #999;
  }
</style>
