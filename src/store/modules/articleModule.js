import * as types from '../mutation-types'
import api from '../../api/index'

const state = {
  swiperList:[]
}
const mutations = {
  [types.GETSWIPERLIST](state, res){
    state.swiperList = res
  }
}

const actions = {
  getSwiperList({commit}, token){
    commit(types.COM_LOADING, true)
    api.getNewestList(token)
      .then((res) => {
        console.log(res)
        setTimeout(function () {
          commit(types.COM_LOADING, false)
        },200)
        if(res.data.status == 401){
          $.alert("token失效,请重新登录", function () {
            commit(types.LOGOUT)
          });
        }else if(res.data.status == 200){
          commit(types.GETSWIPERLIST, res.data.data)
        }else if(res.data.statue == -2){
          $.alert('已在别的地方登录', function () {
            commit(types.LOGOUT)
          })
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  }
}

const getters = {
  swiperList:state => {return state.swiperList},
}

export default{
  state,
  mutations,
  actions,
  getters
}
