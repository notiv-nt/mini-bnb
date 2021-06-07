import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },

  {
    path: '/listing/:id',
    name: 'listing',
    component: () => import('../views/Listing.vue'),
  },

  {
    path: '/saved',
    name: 'saved',
    component: () => import('../views/Saved.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
