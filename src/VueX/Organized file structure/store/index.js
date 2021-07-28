import { createStore } from "vuex";
import counterStore from './counter/index.js';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js'
const store = createStore({
  modules: {
    counter: counterStore
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
});
 export default store;