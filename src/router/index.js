import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue'; // Adjust the path to your components

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/page/about-us.vue'), // Lazy-loaded component
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
