module.exports = {
    '/page1': {
      name: 'page1x',
      component: function (resolve) {
        require(['./pages/Page1/index'], resolve)
      }
    },
    '/page2/:id': {
      name: 'page2x',
      component: function (resolve) {
        require(['./pages/Page2/index'], resolve)
      }
    },
};
