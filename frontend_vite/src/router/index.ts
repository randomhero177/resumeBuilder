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
        component: () => import('@/pages/Template.vue'),
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

    scrollBehavior(to) {
        // En Vue 3, las coordenadas usan 'top' y 'left' en lugar de 'x' e 'y'
        return to.meta.scrollToTop ? { top: 0, left: 0 } : true;
    },
    routes,
});

function getRoutesList(routesList, pre) {
    return routesList.reduce((array, route) => {
        if (route.path.includes(':pathMatch')) return array;

        const path = `${pre}${route.path}`.replace(/\/$/, ""); // Limpia slashes extras
        array.push(path || pre);

        if (route.children) {
            array.push(...getRoutesList(route.children, `${path}/`));
        }
        return array;
    }, []);
}


export function getRoutesXML() {
    const list = getRoutesList(routes, 'http://build-resume.io')
        .map(route => `<url><loc>${route}</loc></url>`)
        .join('\r\n');
    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${list}
  </urlset>`;
}

export default router;
