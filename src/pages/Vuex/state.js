import rest from 'rest';
import router from 'plugins/router';

const INIT = 'vuex/INIT';

export const getters = {
  msg: ({ vuex }) => {
    return vuex.msg;
  },
  data: ({ vuex }) => {
    return vuex.data;
  }
}

export const actions = {
  init: async (store, ...args) => {
    console.warn(store)
    const data = await rest.get('/smm-2017-01-03.json');
    store.dispatch({ type: INIT, payload: data })
  },
  changeOption: (store, arg) => {
    console.warn(arg)
  },
  goI18n: () => {
    router.go({ name: 'i18n' });
  }
}

export const state = {
  msg: 'vuex: msg',
  data: null,
}

export const mutations = {
  [INIT]: (state, payload) => {
    console.warn(`${INIT} mutations: `, state, payload)
    state.vuex.data = payload;
  }
}

export default {
  getters,
  actions,
};