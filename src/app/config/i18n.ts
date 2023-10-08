import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import enJson from 'locale/en.json'
import roJson from 'locale/ro.json'
import ruJson from 'locale/ru.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: { ...enJson },
      ro: { ...roJson },
      ru: { ...ruJson },
    },
    lng: 'en',
  })

export default i18n
