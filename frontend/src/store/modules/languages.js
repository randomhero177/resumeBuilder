const state = {
  languages: [],
};

const actions = {
  addLanguageToList({ commit }, language) {
    commit('addLanguage', language)
  },
  removeLanguageFromList({ commit }, index) {
    commit('removeLanguage', index);
  },
  fetchLanguage({ commit }, language) {
    commit('updateLanguage', language);
  },
  fetchLanguageLevel({ commit }, level) {
    commit('updateLanguageLevel', level);
  },
  removeSection({ commit }) {
    commit('removeSection');
  },
};

const mutations = {
  addLanguage(state, language) {
    state.languages.push(language);
  },
  removeLanguage(state, index) {
    state.languages.splice(index, 1);
  },
  updateLanguage(state, language) {
    state.languages[language.id].name = language.name;
  },
  updateLanguageLevel(state, level) {
    state.languages[level.id].level = level.level;
  },
  removeSection(state) {
    state.languages = [];
  },
  setLanguages(state, payload) {
    state.languages = payload;
  }
};

const languages = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default languages;
