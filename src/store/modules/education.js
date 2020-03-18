const state = {
  educationList: [],
};

const actions = {
  addEducationToList({ commit }, obj) {
    commit('addEducation', obj);
  },
  removeEducationFromList({ commit }, index) {
    commit('removeEducation', index);
  },
  fetchUniversity({ commit }, education) {
    commit('updateUniversity', education);
  },
  fetchFieldOfStudy({ commit }, education) {
    commit('updateFieldOfStudy', education);
  },
  fetchDegree({ commit }, education) {
    commit('updateDegree', education);
  },
  fetchDayStart({ commit }, education) {
    commit('updateDayStart', education);
  },
  fetchDayEnd({ commit }, education) {
    commit('updateDayEnd', education);
  },
};

const mutations = {
  addEducation(state, obj) {
    state.educationList.push(obj);
  },
  removeEducation(state, index) {
    state.educationList.splice(index, 1);
  },
  updateUniversity(state, education) {
    console.log(state.educationList[education.id]);
    console.log(education.id);
    state.educationList[education.id].university = education.university;
    console.log(state.educationList);
  },
  updateFieldOfStudy(state, education) {
    state.educationList[education.id].fieldOfStudy = education.fieldOfStudy;
  },
  updateDegree(state, education) {
    state.educationList[education.id].degree = education.degree;
  },
  updateDayStart(state, education) {
    console.log(education);
    state.educationList[education.id].dayStart= education.dayStart;
  },
  updateDayEnd(state, education) {
    state.educationList[education.id].dayEnd= education.dayEnd;
  },
};

const education = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default education;
