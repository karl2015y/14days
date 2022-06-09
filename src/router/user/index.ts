
import { RouteRecordRaw } from 'vue-router'





const routes: RouteRecordRaw =
{
    name: 'user',
    path: '/',
    meta: {
        title: '14Days'
    },
    component: () => import('@/views/Layout.vue'),
    children: [
        {
            path: `home`,
            name: 'home',
            component: () => import('@/views/Home.vue')
        }, {
            path: `hotel/:id`,
            name: 'hotelDetails',
            component: () => import('@/views/Hotel.vue')
        },
        {
            path: `Q&A`,
            name: 'QandA',
            component: () => import('@/views/QandA.vue')
        },
        {
            path: `ContactUs`,
            name: 'ContactUs',
            component: () => import('@/views/ContactUs.vue')
        },
        {
            path: `Blogs`,
            name: 'Blogs',
            component: () => import('@/views/Post.vue')
        },
        {
            path: `Blogs/:id`,
            name: 'BlogText',
            component: () => import('@/views/PostText.vue')
        },
        {
            path: `Articles/:id`,
            name: 'ArticleText',
            component: () => import('@/views/PostText.vue')
        },

        {
            path: `Articles`,
            name: 'Articles',
            component: () => import('@/views/Post.vue')
        },
    ]
};


export default { routes }
