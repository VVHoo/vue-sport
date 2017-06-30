/**
 * Created by EKO-LKB on 2017/6/22.
 */
import * as types from '../mutation-types'
import api from '../../api/index'
const state = {
  lessonTypeList:[],
  lessonList:[],
  trainCurrentPage:0,
  trainPageSize:5,
  trainLessonSearchType:''
  //typePageSize, typeCurrentPage, typeCurrentSearchType
}

const mutations = {
  [types.GETLESSONTYPE](state, res){
    state.lessonTypeList = res
  },
  [types.NEXT_PAGE](state){
    state.trainCurrentPage++
  },
  [types.SET_SEARCHTYPE](state, searchType){
    state.trainLessonSearchType = searchType
  },
  [types.RESET_TRAINPAGE](state){
    state.trainCurrentPage = 0
    state.trainPageSize = 5
    state.lessonList = []
  },
  [types.SET_SCROLL_LOADING](state, status){
    state.scrollLoading = status
  },
  [types.SET_LESSON_LOADED](state, status){
    state.lessonLoaded = status
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
  },

  nextPage({commit}){
    commit(types.NEXT_PAGE)
  },
  setSearchType({commit}, searchType){
    commit(types.SET_SEARCHTYPE, searchType)
  },
  resetTrainPage({commit}){
    commit(types.RESET_TRAINPAGE)
  },
  setScrollLoading({commit}, status){
    commit(types.SET_SCROLL_LOADING, status)
  },
  setLessonLoaded({commit}, status){
    commit(types.SET_LESSON_LOADED, status)
  }
}

const getters = {
  lessonTypeList:state => {return state.lessonTypeList},
  trainCurrentPage:state => {return state.trainCurrentPage},
  trainPageSize:state => {return state.trainPageSize},
  trainLessonSearchType:state => {return state.trainLessonSearchType},
}

export default{
  state,
  mutations,
  actions,
  getters
}
