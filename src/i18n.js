// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uz from "./components/locales/kor/translationko.json";
import en from "./components/locales/ru/translationru.json";
import ko from "./components/locales/uz/taranslationuz.json";

i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: uz },
    en: { translation: en },
    ko: { translation: ko },
  },
  fallbackLng: "en",
  lng: "en", // boshlang'ich til
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
