const state = {
  languages: [],
};

const actions = {
  addLanguageToList({ commit }, language) {
    commit('addLanguage', language)
  },
  setLanguagesList({ commit }, list) {
    commit('setLanguages', list);
  },
  fetchLanguage({ commit }, language) {
    commit('updateLanguage', language);
  },
  fetchLanguageLevel({ commit }, level) {
    commit('updateLanguageLevel', level);
  },
};

const mutations = {
  setLanguages(state, list) {
    state.languages = list;
  },
  addLanguage(state, language) {
    state.languages.push(language);
  },
  removeLanguage(state, language) {
    state.languages.push(language);
  },
  updateLanguage(state, language) {
    state.languages[language.id].name = language.name;
  },
  updateLanguageLevel(state, level) {
    state.languages[level.id].level = level.level;
  },
};

const languages = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default languages;
