<template>
  <div class="video">
    <video id="train-video" class="video-js vjs-default-skin vjs-fluid vjs-big-play-centered" controls preload="none">
      <source :src="videoPath">
    </video>
  </div>
</template>

<script>
  import video from 'video.js'
  export default {
    props:{
      videoPath:String
    },
    mounted(){
      video('train-video')
    },
    beforeDestroy(){
      video('train-video').dispose()
    }
  }
</script>

<style>
  @import "../../node_modules/video.js/dist/video-js.css";
</style>
