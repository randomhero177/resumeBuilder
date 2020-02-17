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
            component: () => import('@/pages/Create.vue'),
        },
        {
            path: '/preview',
            name: 'home',
            component: () => import('@/pages/Preview.vue'),
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
