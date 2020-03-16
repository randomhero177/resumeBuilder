const state = {
  skills: [],
};

const actions = {
  setSkills({ commit }, skillsList) {
    commit('setSkills', skillsList)
  },
};

const mutations = {
  setSkills(state, list) {
    state.skills = list;
  },
};

const skills = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default skills;
