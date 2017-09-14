import App from './App.vue'
import Vue from 'vue'
import components from './components'
import i18n from 'plugins/i18n'
import rest from 'plugins/rest'
import router from 'plugins/router'

Vue.use(components)
Vue.use(i18n)
Vue.use(rest)
Vue.use(router)

router.start(App, 'app')
