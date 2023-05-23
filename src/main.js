import Vue from 'vue'
import App from './App.vue'
import './bootstrap.js'
import './form.js'
import './axios.js'
import './prime.js'

import { router } from './router'
import store from './store'

import './globalMixins'
import './globalFilters'

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
