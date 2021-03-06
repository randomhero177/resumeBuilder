const state = {
  profile: '',
  position: '',
};

const actions = {};

const mutations = {
  setProfileDesc(state, data) {
    state.profile = data;
  },
  setPosition(state, data) {
    state.position = data;
  },
  clearAll(state) {
    state.profile = '';
    state.position = '';
  },
};

const profile = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default profile;
