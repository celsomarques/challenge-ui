import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import airport from './airport'
import pilot from './pilot'
import flight from './flight'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    airport,
    pilot,
    flight
  }
})
