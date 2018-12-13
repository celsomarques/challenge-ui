import Vue from 'vue'
import './filters/format-date'
import './plugins/vuetify'
import Home from './components/home.vue'
import router from './routers'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(Home),
}).$mount('#app')
