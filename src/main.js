require('./sass/src/index.scss')

import Vue from 'vue'
import App from './App.vue'
import router from './router'


import DemoBox from './components/demobox'
import IconList from './components/iconlist'
import VueQrcode from '@xkeshi/vue-qrcode'

import VueClipboard from './directives/clipboard'

Vue.use(VueClipboard)

Vue.component('qrcode', VueQrcode);

Vue.component('demo-box', DemoBox)
Vue.component('icon-list', IconList)

Vue.config.ignoredElements = [
  'icon',
  'swiper',
  'scrollview',
  'swiperitem',
  'radio',
  'Radio',
  'radioGroup'
]


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
