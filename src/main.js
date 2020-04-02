import Vue from 'vue';
import store from '@/store/index';
import router from '@/router/index';
import App from './App.vue';
import '@/assets/grid.min.css';
import '@/assets/common.styl';
import '@/plugins/moment/plugin';
import i18n from '@/plugins/i18n';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faAllergies, faTrashAlt, faPlusSquare, faPlusCircle, faIdBadge, faInfoCircle, faLink, faTools, faBriefcase, faGraduationCap, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFontAwesome, faFacebook, faFacebookSquare, faLinkedin, faTwitterSquare, faGithubSquare, faChrome } from '@fortawesome/free-brands-svg-icons'
import wysiwyg from 'vue-wysiwyg';
import 'vue-wysiwyg/dist/vueWysiwyg.css';
import 'vue-custom-range-slider/dist/vue-custom-range-slider.css';
import CustomSlider from 'vue-custom-range-slider';
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css';
import Datepicker from 'vuejs-datepicker';
import VTooltip from 'v-tooltip'
Vue.use(VTooltip)
Vue.use(wysiwyg, {});

library.add(faUserSecret, faFontAwesome, faAllergies, faFacebook, faFacebookSquare, faLinkedin, faTwitterSquare, faGithubSquare, faChrome, faTrashAlt, faPlusSquare, faPlusCircle, faIdBadge, faInfoCircle, faLink, faTools, faBriefcase, faGraduationCap, faCheck);


Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('multiselect', Multiselect);
Vue.component('datepicker', Datepicker);
Vue.component('custom-slider', CustomSlider);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
  created() {
    const userLang = (this.$store.state.language.language) ? this.$store.state.language.language : false;
    const lang = userLang || 'en';
    this.$i18n.locale = lang;
    document.querySelector('html').setAttribute('lang', lang);
  },
}).$mount('#app')