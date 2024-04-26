import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Dogs from '../views/Dogs.vue';

const router = createRouter ({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes : [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Dogs',
    name: 'Dogs',
    component: Dogs,
  },

]
})

export default router;

