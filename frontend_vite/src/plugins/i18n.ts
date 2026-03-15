import { createI18n } from 'vue-i18n';
import ru from '@/translations/ru.json';
import en from '@/translations/en.json';

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'ru',
  globalInjection: true,
  messages: {
    ru,
    en,
  },
});

export default i18n;
