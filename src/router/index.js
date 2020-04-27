import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to) {
        return to.meta.scrollToTop ? { x: 0, y: 0 } : true;
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/Home.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'meta.home',
            },
        },
        {
            path: '/choose-template',
            name: 'Template',
            component: () => import('@/pages/Template.vue'),
            meta: {
                title: 'meta.chooseTemplate',
            },
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import('@/pages/Editor.vue'),
            meta: {
                title: 'meta.editor',
            },
        },
        {
            path: '/preview-template',
            name: 'Preview',
            component: () => import('@/pages/Preview.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'meta.download',
            },
        },
        {
            path: '/preview-template-functional',
            name: 'PreviewFunctional',
            component: () => import('@/pages/PreviewFunctional.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'meta.download',
            },
        },
        {
            path: '/preview-template-melinda',
            name: 'PreviewThird',
            component: () => import('@/pages/PreviewThird.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'meta.download',
            },
        },
        {
            path: '*',
            name: 'Error',
            meta: {
                title: 'Error!',
            },
            component: () => import('@/pages/Error.vue'),
        },
    ],
});



export default router;
