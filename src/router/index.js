import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Layout1 from '../views/Layout1.vue';
import Layout2 from '../views/Layout2.vue';
import Hook from '../views/Hook.vue';
import API from '../views/API.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Layout1',
    name: 'Layout1',
    component: Layout1,
  },
  {
    path: '/Layout2',
    name: 'Layout2',
    component: Layout2,
  },
  {
    path: '/Hook',
    name: 'Hook',
    component: Hook,
  },
  {
    path: '/API',
    name: 'API',
    component: API,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
