/**
 * Created by EKO-LKB on 2017/6/19.
 */
import * as types from '../mutation-types'
/*
* 公共state
* */
const state = {
  loading: false,
  token:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : ' ',
  isSubPage: localStorage.getItem('isSubPage') ? localStorage.getItem('isSubPage') : false
}

const mutations = {
  [types.COM_LOADING](state, status){
    state.loading = status
  },
  [types.SAVE_TOKEN](state, token){
    state.token = token
  },
  [types.IS_SUBPAGE](state, status){
    localStorage.setItem('isSubPage', status)
    state.isSubPage = status
  }
}

const getters = {
  loading: state => state.loading,
  token: state => state.token,
  isSubPage: state => state.isSubPage
}

const actions = {
  setLoading({commit}, status){
    commit(types.COM_LOADING, status)
  },
  saveToken({commit}, token){
    commit(types.SAVE_TOKEN, token)
  },
  isSubPage({commit}, status){
    commit(types.IS_SUBPAGE, status)
  }
}
export default{
  state,
  mutations,
  getters,
  actions
}

