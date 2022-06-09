
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
            path: `Blogs`,
            name: 'Blogs',
            component: () => import('@/views/user/Post.vue')
        },
        {
            path: `Blogs/:id`,
            name: 'BlogText',
            component: () => import('@/views/user/PostText.vue')
        },
        {
            path: `Articles/:id`,
            name: 'ArticleText',
            component: () => import('@/views/user/PostText.vue')
        },

        {
            path: `Articles`,
            name: 'Articles',
            component: () => import('@/views/user/Post.vue')
        },
    ]
};


export default { routes }
