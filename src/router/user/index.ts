
import { RouteRecordRaw } from 'vue-router'





const routes: RouteRecordRaw =
{
    name: 'user',
    path: '/',
    meta: {
        title: '14Days'
    },
    component: () => import('@/views/user/Layout.vue'),
    children: [
        {
            path: `home`,
            name: 'home',
            component: () => import('@/views/user/Home.vue')
        }, {
            path: `hotel/:id`,
            name: 'hotelDetails',
            component: () => import('@/views/user/Hotel.vue')
        },
        {
            path: `Q&A`,
            name: 'QandA',
            component: () => import('@/views/user/QandA.vue')
        },
        {
            path: `ContactUs`,
            name: 'ContactUs',
            component: () => import('@/views/user/ContactUs.vue')
        },
        {
            path: `news`,
            name: 'news',
            component: () => import('@/views/user/Post.vue')
        },
        {
            path: `article`,
            name: 'article',
            component: () => import('@/views/user/Post.vue')
        },
        {
            path: `posts/:id`,
            name: 'PostText',
            component: () => import('@/views/user/PostText.vue')
        },

       
    ]
};


export default { routes }
