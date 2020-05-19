import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import template from '@/store/modules/template';
import form from '@/store/modules/form';
import languages from '@/store/modules/languages';
import skills from '@/store/modules/skills';
import education from '@/store/modules/education';
import experience from '@/store/modules/experience';
import profile from '@/store/modules/profile';
import links from '@/store/modules/links';
import email from '@/store/modules/email';
import phone from '@/store/modules/phone';
import accomplishments from '@/store/modules/accomplishments';
import language from '@/store/modules/language';
import home from '@/store/modules/home';
import references from '@/store/modules/references';

Vue.use(Vuex);

const { hostname, port } = window.location;

const state = {
    hostname,
    port,
};

const getters = {};

const mutations = {};

const actions = {};

const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state,
    actions,
    mutations,
    getters,
    modules: {
        template,
        form,
        languages,
        skills,
        education,
        experience,
        profile,
        links,
        email,
        phone,
        accomplishments,
        language,
        home,
        references,
    },
    plugins: [createPersistedState({
        paths: ['accomplishments', 'education', 'email', 'experience', 'form', 'language', 'languages', 'links', 'profile', 'phone', 'skills']
    })],
});

export default store;
