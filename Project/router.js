import { createRouter, createWebHistory } from 'vue-router';
import CoachList from './pages/coaches/CoachList.vue';
import CoachDetails from './pages/coaches/CoachDetails.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsRecieved from './pages/requests/RequestsRecieved.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import ErrorPage from './pages/ErrorPage.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        {
            path: '/coaches/:id', component: CoachDetails, props:true,
            children: [{ path: 'contact', component: ContactCoach }] //coaches/c1/contact
        },
        { path: '/register', component: CoachRegistration , meta: {requiresAuth: true} },
        {path: '/requests', component: RequestsRecieved, meta: {requiresAuth: true}},
        {path: '/login', component: UserAuth, meta: {requiresUnauth: true}},
        {path: '/:notFound(.*)', component: ErrorPage}

    ]
})

router.beforeEach((to, _ ,next)=>{
    if(to.meta.requiresAuth && !store.getters.isAuthenticated){
        next('/login');
    }else if(to.meta.requiresUnauth && store.getters.isAuthenticated){
        next('/coaches');
    }
    else{
        next();
    }
})

export default router;