<template>
  <div class="panel panel-left panel-reveal information-panel">
    <div class="user-information">
      <div class="panel-top">
        <div class="user-avatar">
          <img :src="user.avatarUrl">
        </div>
        <div class="user-name">{{user.userName}}</div>
        <div class="user-email">{{user.email}}</div>
      </div>
      <div class="list-block">
        <ul>
          <li class="item-content item-link" id="editInformation">
            <div class="item-inner">
              <span class="icon iconfont icon-bianjiziliao"></span>
              <span>个人信息</span>
            </div>
          </li>
          <li class="item-content item-link" id="editAvatar">
            <div class="item-inner">
              <span class="icon iconfont icon-icon-14"></span>
              <span>更换头像</span>
            </div>
            <input id="upload" type="file" accept="image/*" style="display: none;">
          </li>
          <li class="item-content item-link" id="editPassword">
            <div class="item-inner">
              <span class="icon iconfont icon-xiugaimima"></span>
              <span>修改密码</span>
            </div>
          </li>
          <li class="item-content item-link" id="logout" @click="logout">
            <div class="item-inner">
              <span class="icon iconfont icon-tuichu"></span>
              <span>退出</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapGetters } from 'vuex'
  export default {
    computed:{
      ...mapGetters([
        'user'
      ])
    },
    methods:{
      logout(){
        this.$store.dispatch('logout')
        this.$router.replace('/account')
      }
    }
  }
</script>

<style scoped>
  @import "../pages/css/userPanel.css";
</style>
