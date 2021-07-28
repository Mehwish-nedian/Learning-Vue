import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import AllUsers from './components/AllUsers.vue';
import AboutPage from './components/AboutPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AllUsers
        },
        {
            path: '/about',
            component: AboutPage
        }
    ]
})

const app = createApp(App);

app.use(router);

router.isReady().then(function(){
    app.mount('#app');
})

