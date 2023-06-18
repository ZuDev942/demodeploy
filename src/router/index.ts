import { createRouter, createWebHistory } from 'vue-router';

import routes from './routes';
import MainLayout from '@/shared/layout/MainLayout/index.vue';
import { RouteName } from '@/shared/constants';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: MainLayout,
      children: routes,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const accessToken = localStorage.getItem(import.meta.env.VITE_ACCESS_TOKEN_NAME);

  if (!to.meta.auth) {
    return next();
  }

  if (!accessToken) {
    return next({ name: RouteName.HOMEPAGE });
  }

  return next();
});

export default router;
