const state = {
  token: {},
  isAuth: false,
  doesResumeExist: false
};

const actions = {};

const mutations = {
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
