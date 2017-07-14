import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'


Vue.use(Router)


const Train = r => require.ensure([], () => r(require('../pages/Train')), 'Train')
const Account = r => require.ensure([], () => r(require('../pages/Account')), 'Account')
const Article = r => require.ensure([], () => r(require('../pages/Article')), 'Article')
const Mine = r => require.ensure([], () => r(require('../pages/Mine')), 'Mine')
const TrainList = r => require.ensure([], () => r(require('../pages/TrainList')), 'TrainList')
const TrainLesson = r => require.ensure([], () => r(require('../pages/TrainLesson')), 'TrainLesson')
const ArticleList = r => require.ensure([], () => r(require('../pages/ArticleList')), 'ArticleList')
const ArticleContent = r => require.ensure([], () => r(require('../pages/ArticleContent')), 'ArticleContent')

const routes = new Router({
  routes: [
    {
      path: '/',
      component:Account,
      beforeEnter:(to, from, next) => {
        if(!store.getters.isLogined){
          next({path: '/account'})
        }else{
          next({path: '/train'})
        }
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path:'/train',
      name:'train',
      component:Train,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/article',
      name:'article',
      component:Article,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine,
      meta:{
        requiresAuth:true
      }
    },
    {
      path:'/train/trainList',
      name:'trainList',
      component:TrainList
    },
    {
      path:'/train/trainList/:lessonId',
      component:TrainLesson
    },
    {
      path:'/article/articleList/:articleType',
      name:'articleList',
      component:ArticleList
    },
    {
      path:'/article/:articleId',
      name:'articleContent',
      component:ArticleContent
    },
    {
      path:'/article/articleList/:articleType/:articleId',
      component:ArticleContent
    },
    {
      path:'/mine/:lessonId',
      component: TrainLesson
    }
  ]
})
routes.beforeEach((to, from, next) => {
  //console.log(from.path + "  to  " + to.path)
  let token = store.getters.token
  if(to.meta.requiresAuth){
    if(token){
      next()
    }else {
      next({path: '/account'})
    }
  }else{
    next()
  }
})


export default routes
