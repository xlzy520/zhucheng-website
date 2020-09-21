import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/* 隐藏元素类 */
import 'element-ui/lib/theme-chalk/display.css'
/* 过渡 动画 */ //fade/zoom
import 'element-ui/lib/theme-chalk/base.css'
import animate from 'animate.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import './styles/index.less'
import '@/icons' // icon

import LzBadge from "@/components/LzBadge";

Vue.component('LzBadge', LzBadge)


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animate)
Vue.use(VueAwesomeSwiper)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
