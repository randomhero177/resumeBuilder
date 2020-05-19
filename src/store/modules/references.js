const state = {
  references: '',
};

const actions = {};

const mutations = {
  setReferences(state, data) {
    state.references = data;
  },
};

const references = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default references;
