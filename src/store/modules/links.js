import Vue from 'vue';

const state = {
  linksList: {},
  linksListConfig: {
    facebook: '',
    linkedin: '',
    twitter: '',
    github: '',
    skype: '',
    website: '',
  },
  iconsConfig: {
    facebook: {
      icon: 'facebook-square',
      title: 'Facebook Profile',
    },
    linkedin: {
      icon:'linkedin',
      title: 'Linkedin Profile'
    },
    twitter: {
      icon: 'twitter-square',
      title: 'Twitter account',
    },
    github: {
      icon: 'github-square',
      title: 'Your github page'
    },
    skype: {
      icon: 'skype',
      title: 'Skype ID'
    },
    website: {
      icon: 'chrome',
      title: 'Your website',
    },
  },
};

const actions = {
  setLink({ commit }, linkObj) {
    commit('setLink', linkObj)
  },
  addRandomLink({ commit }) {
    commit('setNewLink');
  },
  addSection({ commit }) {
    commit('setLinksList');
  },
  removeSection({ commit }) {
    commit('removeSection');
  },
};

const mutations = {
  setLink(state, obj) {
    state.linksList[obj.key] = obj.link;
  },
  setNewLink(state) {
    const key = Object.keys(state.linksList).length;
    Vue.set(state.linksList, `mySite${key}`, 'my link');
  },
  setLinksList(state) {
    state.linksList = {...state.linksList, ...state.linksListConfig};
  },
  removeSection(state) {
    state.linksList = {};
  }
};

const links = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default links;
