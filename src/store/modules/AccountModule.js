/**
 * Created by EKO-LKB on 2017/6/12.
 */
import * as types from '../mutation-types'
const state = {
  user:JSON.parse(localStorage.getItem('user')),
  isLogined:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).loginStatus : false
}

const mutations = {
  [types.LOGIN](state, data){
    state.user = data
    state.isLogined = true
    localStorage.setItem("user", JSON.stringify(data))
  },
  /*[types.REGISTER](state, status){

  },*/
  [types.LOGOUT](state){
    localStorage.removeItem("user")
    localStorage.removeItem("isSubPage")
    state.isLogined = false
  }
}
const getters = {
  user: state => {return state.user},
  isLogined: state => {return state.isLogined}
}

const actions = {
  loginSubmit({commit}, data){
    commit(types.LOGIN, data)
  },
  /*registerSubmit({commit}, status){
    commit(types.REGISTER, status)
  },*/
  logout({commit}){
    commit(types.LOGOUT)
  }
}
export default{
  state,
  mutations,
  getters,
  actions
}
