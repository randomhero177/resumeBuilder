const state = {
  accomplishments: '',
};

const actions = {
  updateProfile({ commit }, data) {
    commit('setAccomplishments', data);
  },
};

const mutations = {
  setAccomplishments(state, data) {
    state.accomplishments = data;
  },
};

const accomplishments = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default accomplishments;
