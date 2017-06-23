import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'


Vue.use(Router)


const Train = r => require.ensure([], () => r(require('../pages/Train')), 'Train')
const Account = r => require.ensure([], () => r(require('../pages/Account')), 'Account')
const Article = r => require.ensure([], () => r(require('../pages/Article')), 'Article')
const Mine = r => require.ensure([], () => r(require('../pages/Mine')), 'Mine')
/*const TrainList = r => require.ensure([], () => r(require('../pages/TrainList')), 'TrainList')
 const TrainLesson = r => require.ensure([], () => r(require('../pages/TrainLesson')), 'TrainLesson')
 const Article = r => require.ensure([], () => r(require('../pages/Article')), 'Article')
 const ArticleList = r => require.ensure([], () => r(require('../pages/ArticleList')), 'ArticleList')
 const ArticleContent = r => require.ensure([], () => r(require('../pages/ArticleContent')), 'ArticleContent')
 const Mine = r => require.ensure([], () => r(require('../pages/Mine')), 'Mine')*/

const routes = new Router({
  routes: [
    {
      path: '/',
      component:Account,
      beforeEnter:(to, from, next) => {
        //console.log(store.getters.user)
        //console.log(store.getters.isLogined)
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
    }
    /*{
     path:'/train',
     name:'train',
     component:Train
     },
     {
     path:'/train/trainList',
     component:TrainList
     },
     {
     path:'/train/trainList/trainLesson',
     component:TrainLesson
     },

     {
     path:'/article',
     component:Article
     },
     {
     path:'/article/articleList',
     component:ArticleList
     },
     {
     path:'/article/articleContent',
     component:ArticleContent
     },
     {
     path:'/article/articleList/articleContent',
     component:ArticleContent
     },

     {
     path:'/mine',
     component:Mine
     },
     {
     path:'/mine/articleContent',
     component:ArticleContent
     }*/
  ]
})
routes.beforeEach((to, from, next) => {
  console.log(from.path + "  to  " + to.path)
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
