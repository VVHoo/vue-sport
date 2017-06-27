<template>
  <nav class="bar bar-tab main-button">
    <router-link to="/train" class="tab-item external" id="train" replace>
      <span class="icon iconfont icon-jianshen2"></span>
      <span class="tab-label">训练</span>
    </router-link>
    <router-link to="/article" class="tab-item external" id="article" replace>
      <span class="icon iconfont icon-gonglve"></span>
      <span class="tab-label">发现</span>
    </router-link>
    <router-link to="/mine" class="tab-item external" id="mine" replace>
      <span class="icon iconfont icon-wode"></span>
      <span class="tab-label">我的</span>
    </router-link>
  </nav>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters([
        'isSubPage'
      ])
    }
  }
</script>

<style>

</style>
