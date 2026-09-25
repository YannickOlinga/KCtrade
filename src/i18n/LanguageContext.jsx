import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

const get = (obj, path) =>
  path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(
    () => localStorage.getItem('kc-lang') || 'fr'
  )

  useEffect(() => {
    localStorage.setItem('kc-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const t = (path) => get(translations[lang], path) ?? path

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
