import VueRouter from 'vue-router'

const routers = {
  '/': {
    name: 'home',
    component: function (resolve) {
      require(['pages/Home'], resolve)
    }
  },
  '/i18n/:id': {
    name: 'i18n',
    component: function (resolve) {
      require(['pages/I18N'], resolve)
    },
    consumerRouteData: 123
  }
}

export default class Router {
  static instance = null;
  static install = (Vue) => {
    Vue.use(VueRouter)
    Router.instance = new VueRouter({
      hashbang: true,
      history: false,
      saveScrollPosition: true
    }).map(routers)
  }

  static start = (...args) => {
    Router.instance.start(...args)
  }
}
