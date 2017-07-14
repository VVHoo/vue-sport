<template>
  <div class="page page-current" id="mine-page">
    <v-header :title="title"></v-header>
    <v-tabar></v-tabar>
    <div class="content">
      <v-sign :signNum="signNum"></v-sign>
      <collection-list :collectionList="collectionList"></collection-list>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import tabar from '../components/tabar.vue'
  import header from '../components/header.vue'
  import sign from '../components/sign.vue'
  import collectionList from '../components/collectionList.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        title:'我的训练',
        msg: 'Hello MinePage!'
      }
    },
    computed:{
      ...mapGetters([
        'token',
        'signNum',
        'collectionList'
      ])
    },
    created(){
      if(this.collectionList.length == 0){
        this.$store.dispatch('getCollectionList', this.token)
          .then(() => {
            this.$store.dispatch('getSignInfo', this.token)
          })
      }
    },
    components:{
      'v-tabar': tabar,
      'v-header': header,
      'v-sign': sign,
      'collection-list': collectionList
    }
  }
</script>

<style>

</style>
