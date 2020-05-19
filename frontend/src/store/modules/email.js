const state = {
  email: '',
};

const actions = {};

const mutations = {
  setEmail(state, email) {
    state.email = email;
  },
};

const email = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default email;
