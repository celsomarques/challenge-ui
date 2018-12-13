import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import FlightList from '../components/flight/list.vue'
import FlightDetail from '../components/flight/detail.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/flights', component: FlightList },
  { path: '/flights/:id', component: FlightDetail }
]

export default new VueRouter({ routes })
