const state = {
  language: 'en',
};

const actions = {
  setLanguage(state, language) {
    state.language = language;
  },
};

const mutations = {
  setLanguage(state, language) {
    state.language = language;
  },
};

const language = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default language;
