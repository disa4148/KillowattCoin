import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import en from '../public/locales/en/en.json';
import ru from '../public/locales/ru/ru.json';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru', // Язык по умолчанию
    debug: true,
    resources: {
        en: { translation: en }, // Здесь мы указываем язык и подключаем переводы
        ru: { translation: ru },
      },
    interpolation: {
      escapeValue: false, // Реакт-специфичная опция
    },
  });

export default i18next;