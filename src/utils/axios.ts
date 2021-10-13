import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {getToken} from '../service/AuthService'

axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.url?.endsWith('/api/auth')) {
    const token = getToken()
    if (token) {
      config.headers!.Authorization = `Bearer ${token}`
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response: AxiosResponse) => {
  return response
}, error => {
  return Promise.reject({status: error.response.status, data: error.response.data})
})

export default axios