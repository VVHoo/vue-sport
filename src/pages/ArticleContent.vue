<template>
  <div class="page page-current" id="article-content">
    <v-header :title="headTitle"></v-header>
    <nav class="bar bar-tab comment-window" v-if="articleContent">
      <div class="comment-input"><label class="icon icon-edit"></label><input type="text" name="comment_input" v-model="sendCommentInfo" placeholder="说点什么吧"/></div>
      <a class="button button-dark send-comment" @click="sendComment">发送</a>
    </nav>
    <div class="content">
      <p v-if="!articleContent">暂时无内容~</p>
      <div class="card article-text" v-if="articleContent">
        <div class="card-content" v-html="articleContent.articleContent"></div>
      </div>
      <article-comment v-if="articleContent"></article-comment>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from '../components/header.vue'
  import articleComment from '../components/articleComment.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        headTitle:'文章详情',
        sendCommentInfo:''
      }
    },
    computed:{
      ...mapGetters([
        'token',
        'articleContent',
        'user'
      ])
    },
    created(){
      this.$store.dispatch('getArticleContent', {
        token:this.token,
        articleId: this.$route.params.articleId
      })
    },
    methods:{
      sendComment(){
        this.$store.dispatch('sendComment', {
          token:this.token,
          comment:this.sendCommentInfo,
          articleId: this.$route.params.articleId,
          avatarUrl:this.user.avatarUrl,
          userName: this.user.userName
        })
      }
    },
    components:{
      'v-header': header,
      'article-comment': articleComment
    }
  }
</script>

<style scoped>
  @import "css/articleContent.css";
</style>
