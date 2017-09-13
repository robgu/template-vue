import { state as vuex, mutations as vuexMutations } from 'pages/Vuex/state';

import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/logger';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vuex,
  },
  mutations: {
    ...vuexMutations,
  },
  middlewares:[createLogger()],
})