/**
 * Created by EKO-LKB on 2017/7/14.
 */
import * as types from '../mutation-types'
import api from '../../api/index'

const state = {
  signNum:0,
  admitSign:0,
  collectionList:[]
}

const mutations = {
  [types.GETCOLLECTIONLIST](state, res){
    state.collectionList = res
  },
  [types.GETADMITSIGN](state, res){
    state.admitSign = res
  },
  [types.GETSIGNNUM](state, res){
    state.signNum = res
  },
  [types.SIGNSUCCESS](state){
    state.admitSign = 0
    state.signNum++
  }
}

const actions = {
  getSignInfo({commit}, token){
    commit(types.COM_LOADING, true)
    api.getSignNum(token)
      .then((res) => {
        console.log(res)
        setTimeout(function () {
          commit(types.COM_LOADING, false)
        },200)
        if(res.data.status == 401){
          $.alert("token失效,请重新登录", function () {
            commit(types.LOGOUT)
            return false
          });
        }else if(res.data.status == 200){
          commit(types.GETADMITSIGN, res.data.data.admitSign)
          commit(types.GETSIGNNUM, res.data.data.signNum)
        }else if(res.data.status == -2){
          $.alert('已在别的地方登录', function () {
            commit(types.LOGOUT)
            return false
          })
        }
      })
  },
  getCollectionList({commit}, token){
    commit(types.COM_LOADING, true)
    api.getCollection(token)
      .then((res) => {
        console.log(res)
        setTimeout(function () {
          commit(types.COM_LOADING, false)
        },200)
        if(res.data.status == 401){
          $.alert("token失效,请重新登录", function () {
            commit(types.LOGOUT)
            return false
          });
        }else if(res.data.status == 200){
          commit(types.GETCOLLECTIONLIST, res.data.data)
        }else if(res.data.status == -2){
          $.alert('已在别的地方登录', function () {
            commit(types.LOGOUT)
            return false
          })
        }
      })
  },
  sign({commit}, token){
    api.sign(token)
      .then((res) => {
        console.log(res)
        if(res.status == 401){
          $.alert("token失效,请重新登录", function () {
            account.login();
          });
        }else if(res.data.status == 16){
          commit(types.SIGNSUCCESS)
        }else if(res.data.status == -2){
          $.alert('已在别的地方登录', function () {
            commit(types.LOGOUT)
            return false
          })
        }
      })
  }
}

const getters = {
  signNum: state => {return state.signNum},
  admitSign: state => {return state.admitSign},
  collectionList: state => {return state.collectionList}
}

export default{
  state,
  mutations,
  actions,
  getters
}
