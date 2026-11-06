import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '@/locales/en/translation.json';
import kn from '@/locales/kn/translation.json';

const storedLanguage =
  typeof window === 'undefined' ? null : window.localStorage.getItem('language');

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    kn: { translation: kn },
  },
  lng: storedLanguage === 'kn' ? 'kn' : 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'kn'],
  interpolation: {
    escapeValue: false,
  },
});

i18n.on('languageChanged', (language) => {
  document.documentElement.lang = language;
  document.title = i18n.t('pageTitle', { lng: language });
  window.localStorage.setItem('language', language);
});

document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language;
document.title = i18n.t('pageTitle');
