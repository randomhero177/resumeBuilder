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
                metaTags: [
                    {
                        name: 'description',
                        content: 'Build your resume! It\'s easy and free'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'Build-resume.io - Your resume is almost here!'
                    },
                    {
                        name: 'og:description',
                        content: 'Build your resume! It\'s easy and free'
                    }
                ]
            },
        },
        {
            path: '/choose-template',
            name: 'Template',
            component: () => import('@/pages/Template.vue'),
            meta: {
                title: 'meta.chooseTemplate',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Use our templates to create a successful resume and download PDF file'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'Choose template'
                    },
                    {
                        name: 'og:description',
                        content: 'Use our templates to create a successful resume and download PDF file'
                    }
                ]
            },
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import('@/pages/Editor.vue'),
            meta: {
                title: 'meta.editor',
                metaTags: [
                    {
                        name: 'description',
                        content: 'Fill in the resume and download your PDF'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'Resume editor'
                    },
                    {
                        name: 'og:description',
                        content: 'Fill in the resume and download your PDF'
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
                title: 'meta.download',
                metaTags: [
                    {
                        name: 'description',
                        content: 'All set? Download your job-winning resume in PDF'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'Download your resume'
                    },
                    {
                        name: 'og:description',
                        content: 'All set? Download your job-winning resume in PDF'
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
                title: 'meta.download',
                metaTags: [
                    {
                        name: 'description',
                        content: 'All set? Download your job-winning resume in PDF'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'Download your resume'
                    },
                    {
                        name: 'og:description',
                        content: 'All set? Download your job-winning resume in PDF'
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
                title: 'meta.download',
                metaTags: [
                    {
                        name: 'description',
                        content: 'All set? Download your job-winning resume in PDF'
                    },
                    {
                        name: 'og:type',
                        content: 'article'
                    },
                    {
                        name: 'og:title',
                        content: 'Download your resume'
                    },
                    {
                        name: 'og:description',
                        content: 'All set? Download your job-winning resume in PDF'
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



export default router;
