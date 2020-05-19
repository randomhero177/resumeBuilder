const state = {
  skills: [],
};

const actions = {
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
