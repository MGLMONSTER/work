import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import $ from 'jquery'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/styles/index.scss' // global css

// import 'bootstrap/css/bootstrap.min.css'
// import 'bootstrap/js/bootstrap.min.js'

import App from './App'
import router from './router'
import store from './store'

import i18n from './lang' // Internationalization
import './icons' // icon
import './errorLog'// error log
import './permission' // permission control
import './mock' // simulation data

import "./assets/iconfont/iconfont.css"

import * as filters from './filters' // global filters

import Rum from 'rui-men'
import 'rui-men/lib/main.css'
Vue.use(Rum)

import '../static/ueditor/ueditor.config.js'
import '../static/ueditor/ueditor.all.min.js'
import '../static/ueditor/ueditor.parse.min.js'
import '../static/ueditor/lang/zh-cn/zh-cn.js'

import '../static/ueditor/themes/default/css/ueditor.css'
import '../static/ueditor/themes/iframe.css'
import '../static/ueditor/third-party/codemirror/codemirror.css'
import './styles/orhonfont.css'
Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  $,
  template: '<App/>',
  components: { App }
})
