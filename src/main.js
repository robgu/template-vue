import './components'
import 'plugins/rest'

import App from './App.vue'
import router from 'plugins/router'

router.start(App, 'app')
