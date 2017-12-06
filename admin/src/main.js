import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import router from './router.js'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'



Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)



router.beforeEach((to, from, next) => {

  NProgress.start();
  next()
})

router.afterEach(transition => {
  NProgress.done();
});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
  //render: h => h(Login)
}).$mount('#app')

router.replace('/login')


