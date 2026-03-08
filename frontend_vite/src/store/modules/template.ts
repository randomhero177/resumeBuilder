const state = {
  templateName: 'template',
  templateList: ['template', 'template-functional', 'template-melinda'],
};

const actions = {
  setTemplateName({ commit }, templateName) {
    commit('setTemplateName', templateName)
  },
};

const mutations = {
  setTemplateName(state, templateName) {
    state.templateName = templateName;
  },
};

const template = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export default template;
