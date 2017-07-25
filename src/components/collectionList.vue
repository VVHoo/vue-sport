<template>
  <div class="list-block mytrain_lesson">
    <router-link :to="{path:'/mine/' + item.videoId}" class="card" v-for="(item, index) in collectionList" tag="div" v-longTap="cancelCollect(item.videoId)" :key="item.id">
      <div class="card-content">
        <img v-lazy="item.coverPath">
      </div>
      <div class="card-footer">{{item.videoTitle}}</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      collectionList: Array
    },
    methods:{
      cancelCollect(videoId){
        console.log()
      }
    }
  }
</script>

<style scoped>
  .mytrain_lesson{
    text-align: center;
  }
  .mytrain_lesson > .card{
    padding:0.5rem 0.5rem 0 0.5rem;
  }
  .mytrain_lesson > .card > .card-content{
    height: 0;
    padding-bottom: 40%;
    overflow: hidden;
  }
  .mytrain_lesson > .card > .card-content > img{
    position: absolute;
    width:100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform:translate(-50%, -50%);
    -moz-transform:translate(-50%, -50%);
  }
  .mytrain_lesson > .card > .card-footer{
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
</style>
