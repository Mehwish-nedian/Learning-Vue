import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import usersList from './components/users/UsersList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/teams",
      component: TeamsList
    },
    {
      path: "/users",
      component: usersList
    }
  ],
  linkActiveClass: 'activelink', 
  // We can change link-active-class to any classname of our choice and style it usng this class
  linkExactActiveClass: 'exactactivelink' //Similar case as linkActiveClass
});

const app = createApp(App)
app.use(router);
app.mount('#app');

