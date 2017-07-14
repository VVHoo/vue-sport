<template>
  <div class="content-padded sign-container">
    <div class="row">
      <div class="col-33">
        <span class="mine-num sign-num">{{signNum}}</span>
        <span class="mine-text">签到天数</span>
      </div>
      <div class="col-33">
        <span class="mine-num">{{collectionList.length}}</span>
        <span class="mine-text">我的课程</span>
      </div>
      <div class="col-33 sign-box">
        <div class="sign" v-if="admitSign" @click="sign">签到</div>
        <div class="sign disabled" disabled="disabled" v-else>已签到</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    props:{
      signNum: Number
    },
    computed:{
      ...mapGetters([
        'collectionList',
        'admitSign',
        'token'
      ])
    },
    methods:{
      sign(){
        this.$store.dispatch('sign', this.token)
      }
    }
  }
</script>

<style scoped>
  .sign-container > .row > .col-33{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-direction: normal;
    -webkit-box-orient: vertical;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -moz-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkit-box-pack: center;
    -moz-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
  }
  .mine-num{
    font-size:1.6rem;
    color: #676764;
  }
  .mine-text{
    font-size:0.75rem;
    color: #ACAEA1;
  }
</style>
