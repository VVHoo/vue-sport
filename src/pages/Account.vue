<template>
  <div class="page page-current" id="login_page">
    <div class="login-container">
      <div>
        <div class="btn-group">
          <div class="btn-login" :class="{active:show === 'login'}" id="login"
          @click="show = 'login'">登录</div>
          <div class="btn-register" :class="{active:show === 'register'}" id="register"
          @click="show = 'register'">注册</div>
        </div>
      </div>
      <form v-if="show === 'login'">
        <div><i class="iconfont icon-zhanghao"></i><input type="text" name="userName" id="userName" placeholder="账号" autocomplete="off" v-model.trim="loginMsg.userName"></div>
        <div><i class="iconfont icon-denglumima"></i><input type="password" name="password" id="password" placeholder="密码" v-model="loginMsg.password"></div>
        <button id="submit" type="button" class="button button-big button-fill" @click="loginSubmit()">登录</button>
      </form>
      <form v-if="show === 'register'">
        <div><i class="iconfont icon-zhanghao"></i><input type="text" name="userName" id="userName" placeholder="账号" autocomplete="off" v-model.trim="registerMsg.userName"></div>
        <div><i class="iconfont icon-denglumima"></i><input type="password" name="password" id="password" placeholder="密码" v-model="registerMsg.password"></div>
        <div><i class="iconfont icon-youxiang"></i><input type="text" name="email" id="email" placeholder="邮箱" v-model="registerMsg.email"></div>
        <button id="registerSend" type="button" class="button button-big button-fill" @click="registerSubmit()">注册</button>
      </form>
    </div>
    <div class="backdrop"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from '../api/index'
  export default {
    data () {
      return {
        show: 'login',
        loginMsg:{
          userName:'',
          password:''
        },
        registerMsg:{
          userName:'',
          password:'',
          email:''
        }
      }
    },
    methods:{
      loginSubmit(){
        if(!this.loginMsg.userName || !this.loginMsg.password){
          $.alert('用户名或密码不能为空');
          return false;
        }

        //console.log(this.loginMsg)
        let userInfo = {}
        userInfo.userName = this.loginMsg.userName
        userInfo.password = this.loginMsg.password
        api.userLogin(userInfo)
          .then((res) => {
            console.log(res)
            if(res.data.status == 200){
              this.$store.dispatch('loginSubmit', res.data.data)
              //console.log(user)--window.user
              this.$router.replace('/train')
            }else if(res.data.status == 401){
              $.alert('用户名或密码错误')
            }
          }, err => {
            reject(err);
        })
        .catch ((error) => {
          reject(error)
        })
      },
      registerSubmit(){
        if(!this.registerMsg.userName || !this.registerMsg.password || !this.registerMsg.email){
          $.alert('请填入完整信息');
          return false;
        }
        if(!(/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/).test(this.registerMsg.password)){
          $.alert('6-16位, 数字, 字母, 字符至少包含两种, 同时不能包含中文和空格');
          return false;
        }
        let reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if(!reg.test(this.registerMsg.email)){
          $.alert('请输入正确邮箱')
          return false
        }
        let userInfo = {}
        userInfo.userName = this.registerMsg.userName
        userInfo.password = this.registerMsg.password
        userInfo.email = this.registerMsg.email
        api.userRegister(userInfo)
          .then((res) => {
            console.log(res)
            if(res.data.status == 4){
              $.alert(res.data.error)
            }else if(res.data.status == 201){
              $.alert('注册成功')
              this.$store.dispatch('registerSubmit', true)
            }
          }, err => {
            reject(err)
          })
          .catch((error) => {
            reject(error)
          })
        //console.log(this.registerMsg);
        this.$store.dispatch('registerSubmit', this.registerMsg)
      }
    }

  }
</script>

<style scoped>
  @import "./css/account.css";
</style>
