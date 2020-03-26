const state = {
  experienceList: [],
};

const actions = {
  addWorkToList({ commit }, obj) {
    commit('addExperience', obj);
  },
  removeWorkFromList({ commit }, index) {
    commit('removeExperience', index);
  },
  fetchCompany({ commit }, experience) {
    commit('updateCompany', experience);
  },
  fetchPosition({ commit }, experience) {
    commit('updatePosition', experience);
  },
  fetchIsCurrentPosition({ commit }, experience) {
    commit('updateIsCurrentPosition', experience);
  },
  fetchDayStart({ commit }, experience) {
    commit('updateDayStart', experience);
  },
  fetchDayEnd({ commit }, experience) {
    commit('updateDayEnd', experience);
  },
  fetchDescription({ commit }, experience) {
    commit('updateDescription', experience);
  },
  fetchSkills({ commit }, experience) {
    commit('updateSkills', experience);
  },
  fetchNewTagToSkills({ commit }, experience) {
    commit('addNewTag', experience);
  },
};

const mutations = {
  addExperience(state, obj) {
    state.experienceList.push(obj);
  },
  removeExperience(state, index) {
    state.experienceList.splice(index, 1);
  },
  updateCompany(state, experience) {
    state.experienceList[experience.id].company = experience.company;
  },
  updatePosition(state, experience) {
    state.experienceList[experience.id].position = experience.position;
  },
  updateDescription(state, experience) {
    state.experienceList[experience.id].description = experience.description;
  },
  updateIsCurrentPosition(state, experience) {
    state.experienceList[experience.id].isCurrentPosition = experience.isCurrentPosition;
  },
  updateDayStart(state, experience) {
    state.experienceList[experience.id].dayStart= experience.dayStart;
  },
  updateDayEnd(state, experience) {
    state.experienceList[experience.id].dayEnd= experience.dayEnd;
  },
  updateSkills(state, experience) {
    state.experienceList[experience.id].skills = experience.list;
  },
  addNewTag(state, experience) {
    state.experienceList[experience.id].skills.push(experience);
    state.experienceList[experience.id].skillOptions.push(experience);
  }
};

const experience = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default experience;
