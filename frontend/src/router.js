import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from './views/LoginPage.vue';
import RegisterPage from './views/RegisterPage.vue';
import ClientList from './components/ClientList.vue';

const routes = [
  {
    path: '/login',
    component: LoginPage 
  },
  {
    path: '/register',
    component: RegisterPage 
  },
  {
    path: '/clients',
    component: ClientList 
  },
  {
    path: '/',
    redirect: '/login'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.path !== '/login' && !token) {
    next('/login');
  } else {
    next();
  }
});

export default router;