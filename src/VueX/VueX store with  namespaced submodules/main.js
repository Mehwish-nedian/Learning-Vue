import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const counterStore = {
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter +=payload.value;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit("increment");
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      //Calling the mutation increment
      context.commit("increase", payload);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  }
};
const store = createStore({
  modules: {
    counter: counterStore
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    login(state) {
      console.log("mutation called");
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
    //Called by action
   
  },
  actions: {
    login(context) {
      console.log('action called');
      context.commit("login");
    },
    logout(context) {
      context.commit("logout");
    },
    increment(context) {
      setTimeout(function() {
        context.commit("increment");
      }, 2000);
    },
    increase(context, payload) {
      console.log(context);
      //Calling the mutation increment
      context.commit("increase", payload);
    }
  },
  getters: {
    isAuth(state){
      return state.isLoggedIn;
    },
   
  }
});

const app = createApp(App);

app.use(store);

app.mount("#app");
