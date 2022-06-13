import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AdminRouter from './admin';
import UserRouter from './user';

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




  UserRouter.routes,
  AdminRouter.routes,

  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    const move2hash: { [key: string]: Boolean } = {
      home: true
    }
    if (move2hash[to.name as string]) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (to.hash) {
            resolve({
              el: to.hash,
              behavior: 'smooth',
            })

          }
        }, 100)
      })
    }
    return { top: 0 }
  },
})

export default router
