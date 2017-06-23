/**
 * Created by EKO-LKB on 2017/6/22.
 */
import * as types from '../mutation-types'
import api from '../../api/index'
const state = {
  lessonTypeList:[]
}

const mutations = {
  [types.GETLESSONTYPE](state, res){
    state.lessonTypeList = res
  }
}

const actions = {
  //api-->commit-->mutations(lessonTypeList = res)
  getLessonTypeList({commit}, token){
    commit(types.COM_LOADING, true)
    api.getLessonTypeList(token)
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
          commit(types.GETLESSONTYPE, res.data.data)
        }else if(res.data.status == -2){
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
  lessonTypeList:state => {return state.lessonTypeList}
}

export default{
  state,
  mutations,
  actions,
  getters
}
