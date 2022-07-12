import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Main from '../views/Main'

import UserList from '../views/user/List'
import UserProfile from '../views/user/Profile'

import NotFound from '../views/NotFound'

Vue.use(Router)

export default new Router({

  mode:'history',
  routes: [
    {
      //登录页
      path: '/main/:name',
      component: Main,
      props: true,
      children:[{
        path: '/user/list',
        component: UserList,
      },{
        path: '/user/profile/:id',
        component: UserProfile,
        //note①这里的name对应页面上的name:UserProfile,不写的话会导致失败
        name:'UserProfile',
        // 修改路由配置 , 主要在router下的index.js中的路由属性中增加了 props: true 属性
        props: true
      }]
    },
    //首页
    {
      path: '/login',
      component: Login
    },{
    path:'/goHome',
      //  重定向
      redirect:'/main'
    },{
    //404页面，path:* 通配剩下无使用过的路径
      path:'*',
      component: NotFound
    }
  ]
})
