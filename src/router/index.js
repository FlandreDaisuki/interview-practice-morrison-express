import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Layout1 from '../views/Layout1.vue';
import Layout2 from '../views/Layout2.vue';
import Hook from '../views/Hook.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/layout1',
    name: 'Layout1',
    component: Layout1,
  },
  {
    path: '/layout2',
    name: 'Layout2',
    component: Layout2,
  },
  {
    path: '/hook',
    name: 'Hook',
    component: Hook,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
