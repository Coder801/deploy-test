import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { arTranslations } from "./translations/ar";
import { enTranslations } from "./translations/en";
import { esTranslations } from "./translations/es";
import { frTranslations } from "./translations/fr";
import { hiTranslations } from "./translations/hi";
import { jpTranslations } from "./translations/jp";
import { ptTranslations } from "./translations/pt";
import { ruTranslations } from "./translations/ru";
import { zhTranslations } from "./translations/zh";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: enTranslations,
  ar: arTranslations,
  es: esTranslations,
  fr: frTranslations,
  hi: hiTranslations,
  jp: jpTranslations,
  pt: ptTranslations,
  ru: ruTranslations,
  zh: zhTranslations,
};

i18n
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: ["en", "es", "fr", "ar", "hi", "ja", "pt", "ru", "zh"],
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
