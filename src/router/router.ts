import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Page from '../views/Page.vue'

export interface RouteMeta {
  name: string;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'home',
    }
  },

  {
    path: `/home`,
    name: 'home',
    component: Page
  },

  // {
  //   path: `/standby`,
  //   name: RouteName.STANDNY,
  //   component: require('../views/page-procedure-standby.vue').default,
  //   meta: {},
  // },


  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
