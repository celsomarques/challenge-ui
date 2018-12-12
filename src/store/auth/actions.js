import { get } from 'lodash/fp'
import axios from 'axios'

export const login = async({ commit }, data) => {
  const res = await axios.post('http://localhost:8081/login', data)
  const token = get('data.token', res)
  if (token) commit('token', token)
}
