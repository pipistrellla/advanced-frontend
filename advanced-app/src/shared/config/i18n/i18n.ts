import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
// подключаем плагины то что в use
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // язык по умолчанию
        lng: 'ru',
        // язык который будет браться если отсутсвуют переводы с выбраного
        fallbackLng: 'ru',
        debug: __IS_DEV__,

        interpolation: {
            escapeValue: false,
        },

        backend: {
            loadPath: '/locales/{{lng}}/{{ns}}.json'
        }
    });


export default i18n;