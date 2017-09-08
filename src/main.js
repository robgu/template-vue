import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './routers';

Vue.use(VueRouter)

const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
}).map(routers)

router.start(App, 'app')
