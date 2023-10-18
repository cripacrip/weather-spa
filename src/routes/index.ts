import { createRouter, createWebHistory } from 'vue-router'
import { ROUTERS_NAME } from './constants';

export { ROUTERS_NAME } from './constants';

const routes = [
  {
    path: '/',
      name: ROUTERS_NAME.home,
      component: () => import('@/layouts/weather-layout.vue'),
  },
  {
    path: '/weather',
    name: ROUTERS_NAME.weather,
    component: () => import('@/components/pages/weather-main/weather-main.vue'),
    children: [
      {
        path: '',
        name: ROUTERS_NAME.dashboard,
        component: () => import('@/components/pages/dashboards/dashboard-weather.vue'),
      }
    ]
  }
];


export const router = createRouter({
    history: createWebHistory(),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore dunno why but TS is stupidly angry here for now reason, after
    // adding nested routes for settings
    routes,
  });
