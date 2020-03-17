import Vue from 'vue';
import store from '@/store/index';
import router from '@/router/index';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import '@/assets/grid.min.css';
import 'vuetify/dist/vuetify.css';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/vuetify.css';
import '@/assets/common.styl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import Unicon from 'vue-unicons';
import { uniUserPlus, uniTimesCircle, uniCommentAltShield, uniCommentAltPlus, uniCommentPlus, uniCommentRedo, uniCommentUpload, uniCommentAltSearch, uniCommentAltUpload, uniCommentAltMedical, uniCommentMedical, uniCommentAltShare, uniCommentShare, uniCommentShield, uniCommentSearch, uniCommentQuestion } from 'vue-unicons/src/icons';
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css';
import Datepicker from 'vuejs-datepicker';

Unicon.add([uniUserPlus, uniTimesCircle, uniCommentAltShield, uniCommentAltPlus, uniCommentPlus, uniCommentRedo, uniCommentUpload, uniCommentAltSearch, uniCommentAltUpload, uniCommentAltMedical, uniCommentMedical, uniCommentAltShare, uniCommentShare, uniCommentShield, uniCommentSearch, uniCommentQuestion]);
Vue.use(Unicon);
Vue.use(wysiwyg, {});
library.add(faUserSecret);


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('multiselect', Multiselect);
Vue.component('datepicker', Datepicker);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
