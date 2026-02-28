const state = {
  name: '',
  lastName: '',
  avatar: {},
  birthday: new Date('1990-12-24T18:04:00.000Z'),
  phone: '',
  email: '',
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
  setPhone(state, phone) {
    state.phone = phone;
  },
  setEmail(state, email) {
    state.email = email;
  },
  clearAll(state) {
    state.name = '';
    state.lastName = '';
    state.avatar = {};
    state.birthday = '';
    state.phone = '';
    state.email = '';
  }
};

const form = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default form;
