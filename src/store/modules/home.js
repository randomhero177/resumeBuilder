const state = {
  isShown: false,
};

const actions = {};

const mutations = {
  setShownState(state, isShown) {
    state.isShown = isShown;
  },
};

const home = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default home;
