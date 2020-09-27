import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'

const baseRequest = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true,
  timeout: 40 * 1000
})

// response interceptor
baseRequest.interceptors.response.use(
  response => {
    const res = response.data
    if (!res.success) {
      Message({
        message: res.msg || 'error',
        type: 'error',
        duration: 1.5 * 1000
      })
      return Promise.reject(res)
    } else {
      return res.data
    }
  },
  error => {
    error.message = error.message === 'timeout of 10000ms exceeded' ? '连接服务器超时！' : error.message
    Message({
      message: error.message,
      type: 'error',
      duration: 1.5 * 1000
    })
    return Promise.reject(error)
  }
)

export default baseRequest
