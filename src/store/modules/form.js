const state = {
  name: '',
  lastName: '',
  avatar: {},
  birthday: '',
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
  setBirthday(state, birthday) {
    state.birthday = birthday;
  },
};

const form = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default form;
