import Vue from 'vue';
import store from '@/store/index';
import router from '@/router/index';
import App from './App.vue';
import 'animate.css/animate.min.css'
import '@/assets/grid.min.css';
import '@/assets/common.styl';
import '@/plugins/moment/plugin';
import i18n from '@/plugins/i18n';
import '@/plugins/fontAwesome';
import '@/plugins/multiselect';
import '@/plugins/wysiwyg';
import '@/plugins/customSlider';
import '@/mixins/updateStoreModel';
import '@/mixins/getLocale';
import Datepicker from 'vuejs-datepicker';
import Notification from '@/components/common/Notification';
import VTooltip from 'v-tooltip';
import breakpoint from "@/mixins/breakpoint";
import apiRequests from '@/services/api';

Vue.use(VTooltip);
Vue.component('datepicker', Datepicker);
Vue.component('notification', Notification);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: h => h(App),
  created() {
    const userLang = (this.$store.state.userLang.language) ? this.$store.state.userLang.language : false;
    const localeLang = this.getBrowserLocales()[0];
    const lang = userLang || localeLang;
    this.$i18n.locale = lang;
    this.$store.commit('userLang/setLanguage', lang);
    document.querySelector('html').setAttribute('lang', lang);
    const abrakadabra = localStorage.getItem('abrakadabra');

    if(abrakadabra) {
      console.log(abrakadabra);
      const config = {
        headers: { Authorization: `Bearer ${abrakadabra}` }
      };
      apiRequests.getResume(config).then(responce => {
        if (responce && responce.status === 200) {
          this.$store.commit('user/setUserAuth', true);
          if(responce.data.length) {
            this.updateStoreModel(responce.data[0]);
            this.$store.commit('user/setExistance', true)
          }
        } else {
          console.log('not ok')
          localStorage.removeItem('abrakadabra');
          this.$store.commit('user/setUserAuth', false)
          this.$store.commit('user/setUserToken', {})
        }
      })
    }

  },
  methods: {

  },
  watch: {
    '$i18n.locale': function changeTitle() {
      document.title = `${this.$i18n.t(this.$route.meta.title).toString()} - build-resume.io`;
    },
    $route: {
      handler(to) {
        document.title = `${this.$i18n.t(to.meta.title).toString()} - build-resume.io`;
        if(to.meta.metaTags && to.meta.metaTags.length) {
          to.meta.metaTags.forEach(el => {
            const meta = document.querySelector(`meta[name="${el.name}"]`)
            if(meta) {
              document.querySelector(`meta[name="${el.name}"]`).setAttribute('content', this.$i18n.t(el.content).toString())
            } else {
              const tag = document.createElement('meta');
              tag.setAttribute(el.name, this.$i18n.t(el.content).toString());
              document.head.appendChild(tag);
            }
          })
        }
      },
      immediate: true,
    },
  },
}).$mount('#app')

Vue.mixin(breakpoint);

window.showNotification = function(message, type = 'alert-primary') {
  window.events.$emit('showNotification', message, type);
}