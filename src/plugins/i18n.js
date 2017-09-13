import Vue from 'vue'
import i18n from 'vue-i18n';

Vue.use(i18n, { lang: 'zh-CN', locales: { 'zh-CN': {
  title: 'xxxx',
  hello: 'hello {name}!'
}} });
const origin = Vue.prototype.$t;
Vue.prototype.$t = function (...args) {
  console.warn(this.i18n);
  return origin(...args);
}
