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
                title: 'p-error.title',
                requiresAuth: true,
                scrollToTop: true,
            },
        },
        {
            path: '/editor',
            name: 'create',
            component: () => import('@/pages/Create.vue'),
        },
        {
            path: '/preview-template',
            name: 'Preview',
            component: () => import('@/pages/Preview.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'p-error.title',
                requiresAuth: true,
                scrollToTop: true,
            },
        },
        {
            path: '/preview-template-functional',
            name: 'PreviewFunctional',
            component: () => import('@/pages/PreviewFunctional.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'p-error.title',
                requiresAuth: true,
                scrollToTop: true,
            },
        },
        {
            path: '/preview-template-melinda',
            name: 'PreviewThird',
            component: () => import('@/pages/PreviewThird.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'p-error.title',
                requiresAuth: true,
                scrollToTop: true,
            },
        },
        {
            path: '/choose-template',
            name: 'Template',
            component: () => import('@/pages/Template.vue'),
        },
        {
            path: '*',
            name: 'error-404',
            meta: {
                layout: 'LayoutClean',
                title: 'p-error.title',
                requiresAuth: false,
                scrollToTop: true,
            },
            component: () => import('@/pages/Error404.vue'),
        },
    ],
});



export default router;
