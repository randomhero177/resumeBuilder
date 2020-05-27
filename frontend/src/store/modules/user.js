const state = {
  language: 'en',
  token: {}
};

const actions = {};

const mutations = {
  setLanguage(state, language) {
    state.language = language;
  },
  /*
* Запрос на получение UserToken
*/
  setUserToken(state, token) {
    state.token = token
  },
};

const user = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default user;
