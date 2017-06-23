/**
 * Created by EKO-LKB on 2017/6/19.
 */
import * as types from '../mutation-types'
/*
* 公共state
* */
const state = {
  loading: false,
  token:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : ' '
}

const mutations = {
  [types.COM_LOADING](state, status){
    state.loading = status
  },
  [types.SAVE_TOKEN](state, token){
    state.token = token
  }
}

const getters = {
  loading: state => state.loading,
  token: state => state.token
}

const actions = {
  setLoading({commit}, status){
    commit(types.COM_LOADING, status)
  },
  saveToken({commit}, token){
    commit(types.SAVE_TOKEN, token)
  }
}
export default{
  state,
  mutations,
  getters,
  actions
}

