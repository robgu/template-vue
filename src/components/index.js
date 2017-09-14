import ZNData from './ZNData'

export default class Components {
  static install = (Vue) => {
    Vue.component('zn-data', ZNData)
  }
}
