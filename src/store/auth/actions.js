import { get } from 'lodash/fp'
import axios from 'axios'

const { API } = process.env

export const login = async({ commit }, data) => {
  const res = await axios.post(`${API}/login`, data)
  const token = get('data.token', res)
  if (token) commit('token', token)
}
