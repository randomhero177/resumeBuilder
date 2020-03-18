const state = {
  name: '',
  lastName: '',
  avatar: {},
  pickerDate: new Date().toISOString().substr(0, 10),
};

const actions = {
  setUserName({ commit }, name) {
    commit('setUserName', name);
  },
  setUserLastName({ commit }, lastName) {
    commit('setUserName', lastName);
  },
  setAvatar({ commit }, avatar) {
    commit('setAvatar', avatar);
  },
};

const mutations = {
  setUserName(state, name) {
    state.name = name;
  },
  setUserLastName(state, lastName) {
    state.lastName = lastName;
  },
  setAvatar(state, avatar) {
    state.avatar = avatar;
  },
  setPickerDate(state, pickerDate) {
    state.pickerDate = pickerDate;
  },
};

const form = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default form;
