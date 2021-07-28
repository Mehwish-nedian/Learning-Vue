import actions from "./actions.js";
import mutations from "./mutations.js";
import getters from "./getters.js";
const counterStore = {
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters
};
export default counterStore;
