
import { RouteRecordRaw } from 'vue-router'
import { prefixRoutes } from '../menu'

// const routes: Array<RouteRecordRaw> =
    // prefixRoutes('doms', [
    //     {
    //         name: 'ListDom',
    //         path: '',
    //         meta: {
    //             title: '元件列表',
    //             icon: 'auto_awesome_mosaic',
    //             showInMenu: true
    //         },
    //         component: () => import('../../views/admin/dom/ListDom.vue'),
    //     },
    //     {
    //         name: 'DomsItem',
    //         path: ':id',
    //         meta: {
    //             title: '元件資料',
    //             icon: 'note_add'
    //         },
    //         component: () => import('@/views/admin/dom/Dom.vue'),
    //         redirect: {
    //             name: 'DomBlocks',
    //         },
    //         children: [
    //             {
    //                 name: 'DomEdit',
    //                 path: 'edit',
    //                 meta: {
    //                     title: '編輯元件',
    //                 },
    //                 component: () => import('@/views/admin/dom/DomEdit.vue'),
    //             }, {
    //                 name: 'DomBlocks',
    //                 path: 'blocks',
    //                 meta: {
    //                     title: '元件編輯器',
    //                 },
    //                 component: () => import('@/views/admin/dom/DomBlocks.vue'),
    //             }, {
    //                 name: 'DomPreview',
    //                 path: 'preview',
    //                 meta: {
    //                     title: '元件預覽',
    //                 },
    //                 component: () => import('@/views/admin/dom/DomPreview.vue'),
    //             },
    //         ]
    //     },

    // ])



// 當menu有兩層時
const routes: RouteRecordRaw =
{
    name: 'Posts',
    path: 'posts',
    meta: {
        title: '文章管理',
        icon: 'nature',
        showInMenu: true
    },
    component: () => import('@/views/admin/layout.vue'),

    redirect: {
        name: 'PostList',
    },
    children: [
        {
            name: 'PostSet',
            path: 'set',
            meta: {
                title: '文章設定',
                icon: 'auto_awesome_mosaic',
                showInMenu: true
            },
            component: () => import('@/views/admin/PostSet.vue'),
        },
        {
            name: 'PostList',
            path: 'list',
            meta: {
                title: '文章列表',
                icon: 'auto_awesome_mosaic',
                showInMenu: true
            },
            component: () => import('@/views/admin/PostList.vue'),
        },
        {
            name: 'PostCreate',
            path: 'create',
            meta: {
                title: '新增文章',
                icon: 'auto_awesome_mosaic',
                showInMenu: true
            },
            component: () => import('@/views/admin/PostCreate.vue'),
        },  
          {
            name: 'PostEdit',
            path: 'edit/:id',
            meta: {
                title: '編輯文章',
                icon: 'auto_awesome_mosaic',
            },
            component: () => import('@/views/admin/PostEdit.vue'),
        },

    ]
};


export default routes




