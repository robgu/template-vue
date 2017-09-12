import App from './App.vue'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import routers from './routers';
import store from './store'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
}).map(routers)
Vue.http.options.root = 'http://om9yvfnba.bkt.clouddn.com'
Vue.http.interceptors.push({
  request(req) {
    console.log('Intercepted REQ:', req);
    return req;
  },
  response(res) {
    console.log('Intercepted RES:', res)
    return res;
  }
})

new Vue({
  el: 'app',
  store,
  components: { App }
})
