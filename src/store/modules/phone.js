const state = {
  phone: '',
};

const actions = {};

const mutations = {
  setPhone(state, phone) {
    state.phone = phone;
  },
};

const phone = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default phone;
