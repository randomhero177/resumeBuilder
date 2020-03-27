import Vue from 'vue';
import store from '@/store/index';
import router from '@/router/index';
import App from './App.vue';
import '@/assets/grid.min.css';
import '@/assets/common.styl';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faAllergies, faTrashAlt, faPlusSquare, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFontAwesome, faFacebook, faFacebookSquare, faLinkedin, faTwitterSquare, faGithubSquare, faChrome } from '@fortawesome/free-brands-svg-icons'
import wysiwyg from "vue-wysiwyg";
import "vue-wysiwyg/dist/vueWysiwyg.css";
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css';
import Datepicker from 'vuejs-datepicker';

Vue.use(wysiwyg, {});
library.add(faUserSecret, faFontAwesome, faAllergies, faFacebook, faFacebookSquare, faLinkedin, faTwitterSquare, faGithubSquare, faChrome, faTrashAlt, faPlusSquare, faPlusCircle);


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('multiselect', Multiselect);
Vue.component('datepicker', Datepicker);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
