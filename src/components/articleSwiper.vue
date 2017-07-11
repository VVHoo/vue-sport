<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(item, index) in swiperList" :key="item.id"><img :src="item.imgPath"></swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide }  from 'vue-awesome-swiper'
  export default {
    props:{
      swiperList: Array
    },
    data() {
      return {
        swiperOption: {
          initialSlide: 0,
          autoplay: 5000,
          direction : 'horizontal',
          setWrapperSize:true,
          loop:true,
          autoplayDisableOnInteraction:false,
          pagination : '.swiper-pagination'
        }
      }
    },
    components:{
      swiper,
      swiperSlide
    }
  }
</script>

<style>
  .swiper-container{
    max-height:9rem;
    padding-bottom:0;
  }
  .swiper-container img{
    width: 100%;
  }
  .swiper-pagination-bullet{
    width:6px;
    height:6px;
  }
  .swiper-pagination-bullet-active{
    background: #ffffff;
  }
</style>
