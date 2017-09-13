module.exports = {
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
