// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import home from './components/header/nav/home/home'
import ratings from './components/header/nav/ratings/ratings'
import seller from './components/header/nav/seller/seller'

import "./components/stylus/mixin.styl"

Vue.use(vueResource)
Vue.use(VueRouter)
const router = new VueRouter({
	mode: 'history',
	routes: [
	{path:'/', component: home},
	{path:'/header', component: ratings},
	{path:'/footer', component: seller}
	]
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

