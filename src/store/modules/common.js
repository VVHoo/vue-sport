/**
 * Created by EKO-LKB on 2017/6/19.
 */
import * as types from '../mutation-types'
/*
* 公共state
* */
const state = {
  loading: false
}

const mutations = {
  [types.COM_LOADING](state, status){
    state.loading = status
  }
}

const getters = {
  loading: state => state.loading
}

const actions = {
  setLoading({commit}, status){
    commit(types.COM_LOADING, status)
  }
}
export default{
  state,
  mutations,
  getters,
  actions
}

