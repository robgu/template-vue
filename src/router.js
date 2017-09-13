import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routers = {
    '/': {
      name: 'home',
      component: function (resolve) {
        require(['./pages/Home/index'], resolve)
      },
    },
    '/vuex/:id': {
      name: 'vuex',
      component: function (resolve) {
        require(['./pages/Vuex/index'], resolve)
      },
      consumerRouteData: 123
    },
};


export default new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
}).map(routers)