import Vue from 'vue';
import VueI18n from 'vue-i18n';
import ru from '@/translations/ru.json';
import en from '@/translations/en.json';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ru',
  messages: {
    ru,
    en,
  },
});

export default i18n;
