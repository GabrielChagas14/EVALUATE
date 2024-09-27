import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

const routes = [
    {
        path: '/',
        name: 'login',
        component: LoginView
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterView
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;