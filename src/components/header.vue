<template>
  <header class="bar bar-nav common-head">
    <a class="icon icon-me pull-left open-panel myinformation" @click="openUserPanel" v-if="!isSubPage"></a>
    <a class="button button-link button-nav pull-left back" @click="back"><span class="icon icon-left" v-if="isSubPage"></span></a>
    <h1 class="title top-title">{{title}}</h1>
  </header>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
export default {
  props:{
    title:String
  },
  computed:{
    ...mapGetters([
      'isSubPage'
    ])
  },
  methods:{
    openUserPanel() {
      $.openPanel(".information_panel");
    },
    back(){
      this.$router.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .page > header > a,
  .page > header > a:active{
    color: #ffffff;
  }
</style>
