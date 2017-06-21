<template>
  <header class="bar bar-nav common-head">
    <a class="icon icon-me pull-left myinformation" @click="openUserPanel"></a>
    <h1 class="title top-title">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props:{
    title:String
  },
  methods:{
    openUserPanel() {
      $.openPanel(".information_panel");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
