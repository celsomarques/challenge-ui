import { get } from 'lodash/fp'
import axios from 'axios'
import env from '../../env'

export const login = async({ commit }, data) => {
  const res = await axios.post(`${env.API}/login`, data)
  const token = get('data.token', res)
  if (token) commit('token', token)
}
