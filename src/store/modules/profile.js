const state = {
  profile: '',
};

const actions = {
  updateProfile({ commit }, data) {
    commit('setProfileDesc', data);
  },
};

const mutations = {
  setProfileDesc(state, data) {
    state.profile = data;
  },
};

const profile = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default profile;
