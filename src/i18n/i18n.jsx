import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpApi) // Load translations via HTTP
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Bind i18n to React
  .init({
    supportedLngs: ["en", "hi"], // Define supported languages
    fallbackLng: "en", // Default language
    debug: false, // Turn off debugging in production
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
    },
  });

export default i18n;
