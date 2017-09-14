import axios from 'axios'

export default class Rest {
  static install = (Vue, option) => {
    Vue.prototype.$http = axios
    axios.interceptors.request.use((config) => {
      config.url = `http://om9yvfnba.bkt.clouddn.com${config.url}`
      return config
    })

    axios.interceptors.response.use((response) => {
      return response.data
    })
  }

  static get = axios.get
  static post = axios.post
  static put = axios.put
  static delete = axios.delete
}
