import Vue from 'vue'
import VueRouter from 'vue-router'

import Content from '../components/Content'
import Main from '../components/Main'


//安装路由
Vue.use(VueRouter);

//导出路由
export default new VueRouter({
  routes:[ {
    //路由路径
    path:'/content',
    //路由名称
    name:'content',
    //跳转到组件
    component:Content
  }, {
    //路由路径
    path: '/main',
    //路由名称
    name: 'main',
    //跳转到组件
    component: Main
  }],
});
