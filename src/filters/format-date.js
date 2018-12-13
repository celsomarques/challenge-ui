import Vue from 'vue'
import moment from 'moment'

const formatDate = (val) => {
  if (!val) return val
  return moment(String(val)).format('MMM DD, YYYY HH:mm')
}
Vue.filter('formatDate', formatDate)
