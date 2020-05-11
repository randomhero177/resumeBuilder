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
                title: 'meta.home.title',
                metaTags: [
                    {
                        name: 'description',
                        content: 'meta.home.description'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'meta.home.title'
                    },
                    {
                        name: 'og:description',
                        content: 'meta.home.description'
                    }
                ]
            },
        },
        {
            path: '/choose-template',
            name: 'Template',
            component: () => import('@/pages/Template.vue'),
            meta: {
                title: 'meta.chooseTemplate.title',
                metaTags: [
                    {
                        name: 'description',
                        content: 'meta.chooseTemplate.description'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'meta.chooseTemplate.title'
                    },
                    {
                        name: 'og:description',
                        content: 'meta.chooseTemplate.description'
                    }
                ]
            },
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import('@/pages/Editor.vue'),
            meta: {
                title: 'meta.editor.title',
                metaTags: [
                    {
                        name: 'description',
                        content: 'meta.editor.description'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'meta.editor.title'
                    },
                    {
                        name: 'og:description',
                        content: 'meta.editor.description'
                    }
                ]
            },
        },
        {
            path: '/preview-template',
            name: 'Preview',
            component: () => import('@/pages/Preview.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'meta.download.title',
                metaTags: [
                    {
                        name: 'description',
                        content: 'meta.download.description'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'meta.download.title'
                    },
                    {
                        name: 'og:description',
                        content: 'meta.download.description'
                    }
                ]
            },
        },
        {
            path: '/preview-template-functional',
            name: 'PreviewFunctional',
            component: () => import('@/pages/PreviewFunctional.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'meta.download.title',
                metaTags: [
                    {
                        name: 'description',
                        content: 'meta.download.description'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'meta.download.title'
                    },
                    {
                        name: 'og:description',
                        content: 'meta.download.description'
                    }
                ]
            },
        },
        {
            path: '/preview-template-melinda',
            name: 'PreviewThird',
            component: () => import('@/pages/PreviewThird.vue'),
            meta: {
                layout: 'LayoutLanding',
                title: 'meta.download.title',
                metaTags: [
                    {
                        name: 'description',
                        content: 'meta.download.description'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'meta.download.title'
                    },
                    {
                        name: 'og:description',
                        content: 'meta.download.description'
                    }
                ]
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

function getRoutesList(routes, pre) {
    return routes.reduce((array, route) => {
        const path = `${pre}${route.path}`;

        if (route.path !== '*') {
            array.push(path);
        }

        if (route.children) {
            array.push(...getRoutesList(route.children, `${path}/`));
        }

        return array;
    }, []);
}

getRoutesList(router.options.routes, 'http://build-resume.io/');


// Console log function result and paste into the sitemap.xml
function getRoutesXML() {
    const list = getRoutesList(router.options.routes, 'http://build-resume.io')
      .map(route => `<url><loc>${route}</loc></url>`)
      .join('\r\n');
    return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${list}
  </urlset>`;
}
getRoutesXML();


export default router;
