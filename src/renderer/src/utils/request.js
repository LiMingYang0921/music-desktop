import axios from 'axios'
import config from '../../src/config/http'
import { ElMessage } from 'element-plus'
// import { logout } from '@/utils/useUser'

// 创建axios实例对象, 添加全局配置
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 3000
})

const token = localStorage.getItem('token')

const errorHandler = (error) => {
  ElMessage.error(error.message)
  return Promise.reject(error)
}

// 请求拦截
service.interceptors.request.use((config) => {
  if (token) {
    if (config?.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
}, errorHandler)

// 响应拦截
service.interceptors.response.use(
  (res) => {
    const { code, message } = res.data
    if (code !== 200) {
      ElMessage.error(message)
      if (code === 403) {
        console.log('未登录')
        // logout()
      }
    }
    return res.data
  },
  (error) => {
    const err = error.response.data && error.response.data.apifoxError
    ElMessage.error(err?.message || '服务器异常')
    if (err.code === 403) {
      console.log('未登录')
      // logout()
    }
    return Promise.reject(error)
  }
)

// function request(options) {
//   if (typeof options.mock !== 'undefined') {
//     config.mock = options.mock
//   }
//   if (config.env === 'prod') {
//     service.defaults.baseURL = config.baseApi
//   } else {
//     service.defaults.baseURL = config.mock ? config.mockApi : config.baseApi
//   }
//   return service(options)
// }

export default service
