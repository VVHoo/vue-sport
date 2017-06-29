<template>
  <div class="infinite-scroll-preloader" v-if="scrollLoading">
    <div class="preloader"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters([
        'scrollLoading'
      ])
    }
  }
</script>

<style>

</style>
