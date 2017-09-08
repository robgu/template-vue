module.exports = {
    '/page1': {
      name: 'page1',
      component: function (resolve) {
        require(['./pages/Page1/index'], resolve)
      }
    },
    '/page2': {
      name: 'page2',
      component: function (resolve) {
        require(['./pages/Page2/index'], resolve)
      }
    },
};
