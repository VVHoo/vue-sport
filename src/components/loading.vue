<template>
  <div class="modal-overlay" :class="{modalOverlayVisible:loading}"></div>
</template>

<script type="text/ecmascript-6">
  export default {
    computed:{
      //watch的话好像只能获取最后一次值的变化
      loading(){
        let loading = this.$store.getters.loading
        if(loading){
          $.showIndicator();
        }else {
          $.hideIndicator();
        }
        return loading
      }
    }

  }
</script>

<style>
  .modal-overlay.modalOverlayVisible,
  .preloader-indicator-overlay.modalOverlayVisible,
  .popup-overlay.modalOverlayVisible {
    visibility: visible;
    opacity: 1;
  }
</style>
