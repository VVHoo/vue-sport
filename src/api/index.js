/**
 * Created by EKO-LKB on 2017/6/12.
 */
import axios from 'axios'

const BASE_URL = 'http://192.168.5.6:8080/'
const instance = axios.create({
  withCredentials: true
});
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use((config) => {
  if(config.method === 'post'){
    config.data = JSON.stringify(config.data)
  }
  return config;
})

export default{
  userLogin(data){
    return instance.post(BASE_URL + 'Auth/login', data)
  },
  userRegister(data){
    return instance.post(BASE_URL + 'Auth/register', data)
  },
  getLessonTypeList(token){
    return instance.post(BASE_URL + 'video/getVideoType/token/' + token)
  },
  getLessonList(token, data){
    return instance.post(BASE_URL + 'video/getVideoList/token/' + token, data)
  },
  getVideoList(token, videoId){
    return instance.post(BASE_URL + 'video/' + videoId + '/detail/token/' + token)
  },
  getCollectStatus(token, videoId){
    return instance.post(BASE_URL + 'videoCollection/' + videoId + '/isCollection/token/' + token)
  },
  collectLesson(token, videoId){
    return instance.post(BASE_URL + 'videoCollection/' + videoId + '/addCollection/token/' + token)
  },

  /*article*/
  getNewestList(token){
    return instance.post(BASE_URL + 'article/getNewestArticle/token/' + token)
  },
  getArticleTypeList(token){
    return instance.post(BASE_URL + 'article/getClassifyArticle/token/' + token)
  },
  getArticleContent(token, articleId){
    return instance.post(BASE_URL + 'article/' + articleId + '/detail/token/' + token)
  }
}
