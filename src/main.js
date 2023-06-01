import Vue from 'vue'
import App from './App.vue'
import './bootstrap.js'
import './form.js'
import './axios.js'
import './prime.js'
import 'leaflet/dist/leaflet.css'

import { router } from './router'
import store from './store'

import './globalMixins'
import './globalFilters'
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
