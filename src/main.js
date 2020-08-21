// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'

// Components
import 'components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import i18n from '@/i18n'
import router from '@/router'
import store from '@/store'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import axios from 'axios'
import ViewUI from 'view-design';
console.warn(ViewUI);
import vuetify from './plugins/vuetify';
Vue.config.productionTip = false

import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

// import { Button, Table } from 'view-design';
// Vue.component('Table', Table);
// Vue.component('Button', Button);

Vue.prototype.$http = axios
// Sets the default url used by all of this axios instance's requests
axios.defaults.baseURL = 'http://127.0.0.1:8001/admin/'
axios.defaults.headers.get['Accept'] = 'application/json'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}



// Sync store with router
sync(store, router)


/* eslint-disable */
new Vue({
  vuetify,
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')