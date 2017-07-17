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
  isSubPage: localStorage.getItem('isSubPage') ? localStorage.getItem('isSubPage') : false,
  pageSize: 5,
  currentPage:0
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
  },
  [types.NEXT_PAGE](state){
    state.currentPage++
  },
  [types.RESET_PAGE](state){
    state.currentPage = 0
    state.pageSize = 5
  }
}

const getters = {
  loading: state => state.loading,
  token: state => state.token,
  isSubPage: state => state.isSubPage,
  currentPage:state => {return state.currentPage},
  pageSize:state => {return state.pageSize}
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
  },
  nextPage({commit}){
    commit(types.NEXT_PAGE)
  },
  resetPage({commit}){
    commit(types.RESET_PAGE)
  }
}
export default{
  state,
  mutations,
  getters,
  actions
}

