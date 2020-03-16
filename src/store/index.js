import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import themes from '@/store/modules/themes';
import form from '@/store/modules/form';
import languages from '@/store/modules/languages';
import skills from '@/store/modules/skills';

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
        themes,
        form,
        languages,
        skills,
    },
});

export default store;
