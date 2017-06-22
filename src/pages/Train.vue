<template>
  <div class="content">
    <search-bar></search-bar>
    <div class="training_lesson">
      <div class="lesson_wrapper">
        <h3>课程分类</h3>
        <p>丰富的训练课程，规范你的训练过程</p>
      </div>
    </div>
  </div>
</template>

<script>
  import searchBar from '../components/searchBar.vue'
  export default {
    components:{
      'search-bar':searchBar
    }
  }
</script>

<style scoped>
  .training_lesson{
    background: #ffffff;
    box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  }
  .lesson_wrapper{
    padding: 1.7rem 0;
    text-align: center;
  }
  .lesson_wrapper h3{
    color: #24c789;
    font-size: 0.9rem;
    font-weight: 700;
  }
  .lesson_wrapper p{
    color: #999;
    font-size: 0.7rem;
  }
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
