const state = {
  name: '',
  lastName: '',
  avatar: {},
  birthday: new Date('1990-12-24T18:04:00.000Z'),
};

const actions = {};

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
  clearAll(state) {
    state.name = '';
    state.lastName = '';
    state.avatar = {};
    state.birthday = '';
  }
};

const form = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default form;
