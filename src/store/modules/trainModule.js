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
    state.lessonTypeList = state.lessonTypeList.concat(res)
  }
}

const actions = {
  //api-->commit-->mutations(lessonTypeList = res)
  getLessonTypeList({commit}, token){
    commit(types.COM_LOADING, true)
    api.getLessonTypeList(token)
      .then((res) => {
        console.log(res)
        commit(types.COM_LOADING, false)
        if(res.data.status == 200){
          commit(types.GETLESSONTYPE, res.data.data)
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
