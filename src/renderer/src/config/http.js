const env = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
const EnvConfig = {
  dev: {
    baseApi: '/api',
    proxyApi: 'https://autumnfish.cn'
  },
  prod: {
    baseApi: ''
  }
}
export default {
  ...EnvConfig[env]
}
