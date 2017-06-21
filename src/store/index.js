/**
 * Created by EKO-LKB on 2017/6/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import accountModule from './modules/AccountModule'

Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    common,
    accountModule
  }
})
