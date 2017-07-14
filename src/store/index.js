/**
 * Created by EKO-LKB on 2017/6/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import accountModule from './modules/accountModule'
import trainModule from './modules/trainModule'
import articleModule from './modules/articleModule'
import mineModule from './modules/mineModule'

Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    common,
    accountModule,
    trainModule,
    articleModule,
    mineModule
  }
})
