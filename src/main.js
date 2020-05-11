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
import Datepicker from 'vuejs-datepicker';
import VTooltip from 'v-tooltip';
import breakpoint from "@/mixins/breakpoint";

Vue.use(VTooltip);
Vue.component('datepicker', Datepicker);

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

Vue.mixin(breakpoint)