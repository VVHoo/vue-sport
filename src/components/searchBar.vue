<template>
  <div class="searchbar_box">
    <div class="searchbar">
    <a class="searchbar-cancel">取消</a>
    <div class="search-input">
      <label class="icon icon-search" for="search"></label>
      <input type="search" id="search" placeholder="搜索训练课程..."/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    }
  }
</script>

<style scoped>
  .searchbar_box{
    height: 2.2rem;
    padding-right: .5rem;
    padding-left: .5rem;
    background-color: #f7f7f8;
  }
  .searchbar_box .searchbar{
    margin: 0 -.5rem;
    padding: .4rem .5rem;
    background: rgba(0,0,0,.1);
  }
  .searchbar-cancel{
    color: #5f646e;
  }
  #search{
    border:0;
  }
</style>
