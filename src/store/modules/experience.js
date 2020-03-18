const state = {
  experienceList: [],
};

const actions = {
  addEducationToList({ commit }, obj) {
    commit('addEducation', obj);
  },
  removeEducationFromList({ commit }, index) {
    commit('removeEducation', index);
  },
  fetchUniversity({ commit }, experience) {
    commit('updateUniversity', experience);
  },
  fetchFieldOfStudy({ commit }, experience) {
    commit('updateFieldOfStudy', experience);
  },
  fetchDegree({ commit }, experience) {
    commit('updateDegree', experience);
  },
  fetchDayStart({ commit }, experience) {
    commit('updateDayStart', experience);
  },
  fetchDayEnd({ commit }, experience) {
    commit('updateDayEnd', experience);
  },
};

const mutations = {
  addEducation(state, obj) {
    state.experienceList.push(obj);
  },
  removeEducation(state, index) {
    state.experienceList.splice(index, 1);
  },
  updateUniversity(state, experience) {
    state.experienceList[experience.id].university = experience.university;
  },
  updateFieldOfStudy(state, experience) {
    state.experienceList[experience.id].fieldOfStudy = experience.fieldOfStudy;
  },
  updateDegree(state, experience) {
    state.experienceList[experience.id].degree = experience.degree;
  },
  updateDayStart(state, experience) {
    state.experienceList[experience.id].dayStart= experience.dayStart;
  },
  updateDayEnd(state, experience) {
    state.experienceList[experience.id].dayEnd= experience.dayEnd;
  },
};

const experience = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default experience;
