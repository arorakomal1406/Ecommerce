// main.js or app.js
import { createApp } from 'vue';
import App from './pages/HomePage.vue';
import { createI18n } from 'vue-i18n';

// Import your translations (this is an example, adjust according to your project structure)
import en from './lang/locales/en.json';
import fr from './lang/locales/fr.json';

// Create a Vue I18n instance with the messages
const i18n = createI18n({
  locale: 'en', // set the default locale
  messages: {
    en,
    fr
  }
});

const app = createApp(App);
app.use(i18n); // Use the i18n instance in your app
app.mount('#app');