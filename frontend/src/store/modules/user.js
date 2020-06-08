const state = {
  language: 'en',
  token: {},
  isAuth: false,
  doesResumeExist: false
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
  setUserAuth(state, isAuth) {
    state.isAuth = isAuth;
  },
  setExistance(state, doesExist) {
    state.doesResumeExist = doesExist;
  },
};

const user = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default user;
