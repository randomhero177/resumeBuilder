const state = {
  accomplishments: '',
};

const actions = {};

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
