import Vue from 'vue';
import store from '@/store/index';
import router from '@/router/index';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/common.styl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Unicon from 'vue-unicons'
import { uniUserPlus, uniTimesCircle, uniCommentAltShield, uniCommentAltPlus, uniCommentPlus, uniCommentRedo, uniCommentUpload, uniCommentAltSearch, uniCommentAltUpload, uniCommentAltMedical, uniCommentMedical, uniCommentAltShare, uniCommentShare, uniCommentShield, uniCommentSearch, uniCommentQuestion } from 'vue-unicons/src/icons'

Unicon.add([uniUserPlus, uniTimesCircle, uniCommentAltShield, uniCommentAltPlus, uniCommentPlus, uniCommentRedo, uniCommentUpload, uniCommentAltSearch, uniCommentAltUpload, uniCommentAltMedical, uniCommentMedical, uniCommentAltShare, uniCommentShare, uniCommentShield, uniCommentSearch, uniCommentQuestion])
Vue.use(Unicon)

library.add(faUserSecret);


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
