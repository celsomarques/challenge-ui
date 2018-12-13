import { get } from 'lodash/fp'
import axios from 'axios'

export const list = async({ commit }, token) => {
  const headers = { authorization: `Bearer ${token}`}
  const response = await axios.get('http://localhost:8081/flights', { headers })
  const flights = get('data._embedded.flights', response)
  commit('flights', flights)
}
