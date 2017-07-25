<template>
  <div class="card article-comment">
    <div class="card-header">{{totalComments}} 全部评论</div>
    <div class="card-content">
      <p v-if="!articleComments">暂时无评论</p>
      <div class="comment" v-for="(item, index) in articleComments" v-if="articleComments">
        <div class="facebook-avatar">
          <img v-lazy="item.avatarUrl">
          <div class="facebook-name">{{item.userName}}</div>
          <div class="facebook-date">{{item.sendTime}}</div>
        </div>
        <div class="comment-content">{{item.comment}}</div>
      </div>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading" :distance="0" v-if="articleComments">
          <span slot="no-more">
            没有更多内容了~
          </span>
      </infinite-loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import InfiniteLoading from 'vue-infinite-loading'
  import api from '../api/index'
  import { mapGetters } from 'vuex'
  export default {
   /* data () {
      return {
        articleComments:[]
      }
    },*/
    computed:{
      ...mapGetters([
        'token',
        'pageSize',
        'currentPage',
        'totalComments',
        'articleComments'
      ])
    },
    created(){
      this.$store.dispatch('getTotalComments', {
        token:this.token,
        articleId:this.$route.params.articleId
      })
    },
    methods: {
      onInfinite(){
        let page = {
          pageSize: this.pageSize,
          currentPage: this.currentPage + 1
        }
        this.$store.dispatch('setLoading', true)
        api.getArticleComments({token: this.token, articleId: this.$route.params.articleId}, page)
          .then((res) => {
            //console.log(res)
            let alertThis = this.$store
            setTimeout(() => {
              this.$store.dispatch('setLoading', false)
            }, 200)
            if(res.data.status == 401){
              $.alert("token失效,请重新登录", function () {
                alertThis.dispatch('logout')
              });
            }else if(res.data.status == 200){
              this.$store.dispatch('getComments', res.data.data)
              //this.articleComments = this.articleComments.concat(res.data.data)
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
              this.$store.dispatch('nextPage')
              if(res.data.data.length < 5){
                this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
              }
            }else if(res.data.status == -2){
              $.alert('已在别的地方登录', function () {
                alertThis.dispatch('logout')
              })
            }
          })
      }
    },
    components:{
      'infinite-loading': InfiniteLoading
    },
    destroyed(){
      this.$store.dispatch('resetPage')
      this.$store.dispatch('resetComments')
    }
  }
</script>

<style scoped>
  .comment{
    padding: 0.5rem 0;
    border-top: 1px solid #e1e1e1;
  }
  .card-content > .comment:first-child{
    border-top:none;
  }
  .facebook-avatar > img{
    float: left;
    width:34px;
    height:34px;
    border-radius: 999px;
    -webkit-border-radius: 999px;
    -moz-border-radius: 999px;
  }
  .comment .facebook-avatar{
    margin: 0 0 0.5rem;
  }
  .comment .facebook-name{
    margin-left: 2.2rem;
    font-size: 0.75rem;
    font-weight: 500;
  }
  .comment .facebook-date{
    margin-left: 2.2rem;
    font-size:0.6rem;
    color: #5f646e;
  }
  .comment-content{
    margin-left: 2.2rem;
  }
  .article-comment .card-header{
    font-size:0.7rem;
  }
</style>
