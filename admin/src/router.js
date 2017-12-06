import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);
Vue.config.debug = true;


import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Main from './components/Main.vue'
import Table from './components/nav1/Table.vue'
import Form from './components/nav1/Form.vue'
//import Page3 from './components/nav1/Page3.vue'
import Page4 from './components/nav2/Page4.vue'
import Page5 from './components/nav2/Page5.vue'
import Page6 from './components/nav3/Page6.vue'
import Page7 from './components/nav3/Page7.vue'
import Page8 from './components/nav4/Page8.vue'
import Page9 from './components/nav4/Page9.vue'

const routes = [
  {
    path: '/login',
    component: Login,
    hidden: true//不显示在导航中
  },
  //{ path: '/main', component: Main },
  {
    path: '/',
    component: Home,
    name: '司机分配管理',
    iconCls: 'el-icon-message',//图标样式class
    children: [
      //{ path: '/main', component: Main },
      { path: '/table', component: Table, name: '初审' },
      { path: '/form', component: Form, name: '复审' }
//    { path: '/page3', component: Page3, name: '页面3' },
    ]
  },
  {
    path: '/',
    component: Home,
    name: '油贷用户管理',
    iconCls: 'fa fa-id-card-o',
    children: [
      { path: '/page4', component: Page4, name: '全部用户' },
      { path: '/page5', component: Page5, name: '黑名单' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '油贷套餐管理',
    iconCls: 'fa fa-line-chart',
    leaf: true,//只有一个节点
    children: [
      { path: '/page6', component: Page6, name: '套餐管理' }, 
      { path: '/page7', component: Page7, name: '编辑套餐' }
    ]
  },
  {
    path: '/',
    component: Home,
    name: '数据统计',
    iconCls: 'fa fa-line-chart',
//  leaf: true,//只有一个节点
    children: [
      { path: '/page8', component: Page8, name: '套餐数据' },
      { path: '/page9', component: Page9, name: '明细' }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
	base: __dirname,
	routes
});
export default router