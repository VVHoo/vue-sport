/**
 * Created by EKO-LKB on 2017/6/22.
 */
import * as types from '../mutation-types'
import api from '../../api/index'
const state = {
  lessonTypeList:[],
  videoList:[],
  trainCurrentPage:0,
  trainPageSize:5,
  trainLessonSearchType:'',
  collectStatus:false,
  videoContent:[],
  videoPopup:false
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
  },
  [types.GETVIDEOLIST](state, res){
    state.videoList = res
  },
  [types.GETCOLLECTSTATUS](state, status){
    state.collectStatus = status
  },
  [types.GETVIDEOCONTENT](state, subVideoId){
    for(let index in state.videoList){
      if(state.videoList[index].subVideoId == subVideoId){
        state.videoContent = state.videoList[index]
      }
    }
  },
  [types.SETVIDEOPOPUP](state, status){
    state.videoPopup = status
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

  getVideoList({commit}, params){
    //console.log(params.token + '--' + params.videoId)
    commit(types.COM_LOADING, true)
    api.getVideoList(params.token, params.videoId)
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
          commit(types.GETVIDEOLIST, res.data.data)
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
  getCollectStatus({commit}, params){
    api.getCollectStatus(params.token, params.videoId)
      .then((res) => {
        //console.log(res)
        if(res.data.status == 10){
          commit(types.GETCOLLECTSTATUS, true)
        }else if(res.data.status == 11){
          commit(types.GETCOLLECTSTATUS, false)
        }else{
          $.alert('出错了')
        }
      })
  },
  collectLesson({commit}, params){
    api.collectLesson(params.token, params.videoId)
      .then((res) => {
        console.log(res)
        if(res.data.status == 8){
          commit(types.GETCOLLECTSTATUS, true)
        }else if( res.data.status == 401){
          $.alert("token失效,请重新登录", function () {
            commit(types.LOGOUT)
          });
        } else if(res.data.status == -2){
          $.alert('已在别的地方登录', function () {
            commit(types.LOGOUT)
          })
        }else {
          $.alert("收藏失败")
        }
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  },
  getCurrentVideo({commit}, subVideoId){
    commit(types.GETVIDEOCONTENT, subVideoId)
  },
  setVideoPopup({commit}, status){
    commit(types.SETVIDEOPOPUP, status)
  }
}

const getters = {
  lessonTypeList:state => {return state.lessonTypeList},
  videoList:state => {return state.videoList},
  trainCurrentPage:state => {return state.trainCurrentPage},
  trainPageSize:state => {return state.trainPageSize},
  trainLessonSearchType:state => {return state.trainLessonSearchType},
  collectStatus:state => {return state.collectStatus},
  videoContent: state => {return state.videoContent},
  videoPopup:state => {return state.videoPopup}
}

export default{
  state,
  mutations,
  actions,
  getters
}
