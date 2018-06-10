import Vue from 'vue'
import App from './App.vue'
import router from './router'

import DemoBox from './components/demobox'
import IconList from './components/iconlist'

import VueClipboard from './directives/clipboard'

Vue.use(VueClipboard)

Vue.component('demo-box', DemoBox)
Vue.component('icon-list', IconList)

Vue.config.ignoredElements = [
  'icon',
  'swiper',
  'scrollview',
  'swiperitem'
]

import './sass/src/index.scss'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
