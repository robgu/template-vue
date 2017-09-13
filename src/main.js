import './components';
import 'plugins/rest'
import 'plugins/router';

import App from './App.vue'
import Vue from 'vue'
import router from 'plugins/router';

router.start(App, 'app')