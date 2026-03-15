const state = {
  language: null,
};

const actions = {};

const mutations = {
  setLanguage(state, language) {
    state.language = language;
  },
};

const user = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default user;
