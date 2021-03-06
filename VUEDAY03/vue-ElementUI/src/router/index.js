import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/Login'
import Main from '../views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      //登录页
      path: '/main',
      component: Main
    },
    //首页
    {
      path: '/login',
      component: Login
    }
  ]
})
