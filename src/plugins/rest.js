import Vue from 'vue'
import axios from 'axios'

axios.interceptors.request.use((config) => {
  config.url = `http://om9yvfnba.bkt.clouddn.com${config.url}`
  return config
})

axios.interceptors.response.use((response) => {
  return response.data
})

Vue.prototype.$http = axios

export default axios
