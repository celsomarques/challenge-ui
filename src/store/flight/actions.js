import { find, get } from 'lodash/fp'
import axios from 'axios'

const { API } = process.env

const getUrl = (status) => /all/i.test(status)
  ? `${API}/flights`
  : `${API}/flights/search/status?q=${status}`

export const search = async({ commit }, data) => {

  const { token, status } = data
  const headers = { authorization: `Bearer ${token}`}
  const response = await axios.get(getUrl(status), { headers })

  const flights = get('data._embedded.flights', response)
  commit('flights', flights)
}

export const load = ({ state, commit }, id) => {
  const flight = find({ id: parseInt(id) }, state.flights)
  commit('flight', flight)
}
