import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/plugins/i18n'
import registerFontAwesome from '@/plugins/fontAwesome.ts';

const app = createApp(App)
app.use(router);
app.use(store);
app.use(i18n);
registerFontAwesome(app);
app.mount('#app')
