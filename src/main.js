import './components';

import App from './App.vue'
import Vue from 'vue'
import rest from 'plugins/rest'
import router from 'plugins/router';

Vue.prototype.$http = rest;

router.start(App, 'app')