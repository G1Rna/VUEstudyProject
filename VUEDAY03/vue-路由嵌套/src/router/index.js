import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Main from '../views/Main'

import UserList from '../views/user/List'
import UserProfile from '../views/user/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //登录页
      path: '/main',
      component: Main,
      children:[{
        path: '/user/list',
        component: UserList,
      },{
        path: '/user/profile',
        component: UserProfile,
      }]
    },
    //首页
    {
      path: '/login',
      component: Login
    }
  ]
})
