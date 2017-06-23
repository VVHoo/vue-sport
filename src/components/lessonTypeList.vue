<template>
  <ul class="lesson_tag clearfix">
    <li v-for="(item, index) in lessonTypeList">
      <div class="tag_container">
        <img :src="item.typeCover">
        <div class="mask"></div>
        <div class="tag_info">
          <div class="tag_title">{{item.videoType}}</div>
          <div class="lesson_count">{{item.typeNum}}个课程</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props:{
      lessonTypeList:Array
    }
  }
</script>

<style scoped>
  .lesson_tag, .train_lession_list{
    margin:0;
    padding:0;
    overflow: hidden;
  }
  .lesson_tag > li{
    width:50%;
    height:0;
    padding-bottom:50%;
    line-height:0;
    float: left;
    overflow: hidden;
  }
  .tag_container, .lesson_introduce{
    position: relative;
  }
  .lesson_tag .mask{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
  }
  .tag_info{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fefefe;
    font-size: 0.78rem;
  }
  .tag_title{
    margin-bottom:1.2rem;
  }
  .tag_container img, .lesson_introduce img{
    width:100%;
  }
  .lesson_introduce img{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform:translate(-50%, -50%);
    -moz-transform:translate(-50%, -50%);
  }
</style>
