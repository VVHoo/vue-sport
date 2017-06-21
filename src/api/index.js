/**
 * Created by EKO-LKB on 2017/6/12.
 */
import axios from 'axios'

const BASE_URL = 'http://192.168.5.6:8080/'
const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use((config) => {
  if(config.method === 'post'){
    config.data = JSON.stringify(config.data)
  }
  config.withCredentials = true
  return config;
})

export default{
  userLogin(data){
    return instance.post(BASE_URL + 'Auth/login', data)
  },
  userRegister(data){
    return instance.post(BASE_URL + 'Auth/register', data)
  }
}
