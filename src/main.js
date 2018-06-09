import Vue from 'vue'
import App from './App.vue'
import router from './router'

import('./sass/src/index.scss')

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
