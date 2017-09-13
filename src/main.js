import './components';

import App from './App.vue'
import Vue from 'vue'
import rest from './rest'
import router from './router';

Vue.prototype.$http = rest;

router.start(App, 'app')