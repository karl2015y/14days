import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
    component: () => import('../views/Home.vue')
  }, {
    path: `/hotel/:id`,
    name: 'hotelDetails',
    component: () => import('../views/Hotel.vue')
  },
  {
    path: `/Q&A`,
    name: 'QandA',
    component: () => import('../views/QandA.vue')
  },
  {
    path: `/ContactUs`,
    name: 'ContactUs',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: `/Blogs`,
    name: 'Blogs',
    component: () => import('../views/Post.vue')
  },
  {
    path: `/Blogs/:id`,
    name: 'BlogText',
    component: () => import('../views/PostText.vue')
  },
  {
    path: `/Articles/:id`,
    name: 'ArticleText',
    component: () => import('../views/PostText.vue')
  },

  {
    path: `/Articles`,
    name: 'Articles',
    component: () => import('../views/Post.vue')
  },

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
    if (move2hash[to.name as string] && to.name !== from.name) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (to.hash) {
            resolve({
              el: to.hash,
              behavior: 'smooth',
            })

          }
        }, 800)
      })
    }
    return { top: 0 }
  },
})

export default router
