<template>
  <div class="swiper-container" id="article-banner">
    <v-swiper
              direction="horizontal"
              :mousewheel-control="true"
              :pagination-visible="true"
              :loop="true">
      <div v-for="(item, index) in swiperList" class="swiper-slide">
        <img v-lazy="item.imgPath">
      </div>
    </v-swiper>
  </div>
</template>

<script>
  import swiper from 'vue-swiper'
  export default {
    props:{
      swiperList: Array
    },
    components:{
      'v-swiper': swiper
    }
  }
</script>

<style scoped>
  .swiper-container{
    max-height:10rem;
    overflow: hidden;
  }
  .swiper-container img{
    max-height: 10rem;
  }
</style>
