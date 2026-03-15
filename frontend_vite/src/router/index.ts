import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home.vue'),
        meta: {
            layout: 'LayoutLanding',
            title: 'meta.home.title',
            metaTags: [
                { name: 'description', content: 'meta.home.description' },
                { name: 'og:type', content: 'article' },
                { name: 'og:title', content: 'meta.home.title' },
                { name: 'og:description', content: 'meta.home.description' }
            ]
        },
    },
    {
        path: '/choose-template',
        name: 'Template',
        component: () => import('@/pages/ChooseTemplate.vue'),
        meta: { title: 'meta.chooseTemplate.title' },
    },
    {
        path: '/editor',
        name: 'editor',
        component: () => import('@/pages/Editor.vue'),
        meta: { title: 'meta.editor.title' },
    },
    {
        path: '/preview-template',
        name: 'Preview',
        component: () => import('@/pages/Preview.vue'),
        meta: { layout: 'LayoutLanding', title: 'meta.download.title' },
    },
    {
        path: '/preview-template-functional',
        name: 'PreviewFunctional',
        component: () => import('@/pages/PreviewFunctional.vue'),
        meta: { layout: 'LayoutLanding', title: 'meta.download.title' },
    },
    {
        path: '/preview-template-melinda',
        name: 'PreviewThird',
        component: () => import('@/pages/PreviewThird.vue'),
        meta: { layout: 'LayoutLanding', title: 'meta.download.title' },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Error',
        meta: { title: 'Error!' },
        component: () => import('@/pages/Error.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        return { top: 0 };
    },
    routes,
});

export default router;
