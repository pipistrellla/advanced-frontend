import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

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
            loadPath: '/locales/{{lng}}/{{ns}}.json',
        },
    });

export default i18n;
