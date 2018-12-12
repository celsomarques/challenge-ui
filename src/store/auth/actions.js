import axios from 'axios'

export const login = async({ commit }, data) => {
  const token = await axios.post('http://localhost:8081/login', data)
  commit('token', token)
}
