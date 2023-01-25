import request from '@/utils/request.js'
import axios from 'axios'
export const getUserListAPI = function (_page, _limit) {
  return request.get('/articles', {
    params: {
      _page,
      _limit
    }
  })
}
export const onLogin = function (username, password) {
  const param = new URLSearchParams()
  param.append('username', username)
  param.append('password', password)
  return axios.post('http://127.0.0.1:3007/api/login', param)
}
