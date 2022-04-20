import React, { createContext, ReactNode, useContext, useState } from 'react'
import { availableLocales, fallback, messages } from '../locale'

interface LocaleContextContent {
  locale: string
  changeLocale: (s: string) => void
}

const LocaleContext = createContext<LocaleContextContent | null>(null)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const browserLocale = navigator.language.slice(0, 2)

  const [locale, setLocale] = useState(
    availableLocales.includes(browserLocale) ? browserLocale : fallback
  )

  const changeLocale = (newLocale: string) => {
    if (!availableLocales.includes(newLocale)) {
      return
    }

    setLocale(newLocale)
  }

  const providerValue = {
    locale,
    changeLocale,
  }

  return (
    <LocaleContext.Provider value={providerValue}>
      {children}
    </LocaleContext.Provider>
  )
}

export const useLocaleContext = () => {
  const localeContent = useContext(LocaleContext)
  if (!localeContent) {
    throw new Error("useLocaleContent cannot be invoked outside it's provider")
  }
  return localeContent
}

export const useLocale = (key: string) => {
  const { locale } = useLocaleContext()
  const messageKey = `${locale}.${key}`

  if (!(messageKey in messages)) {
    throw new Error(`${messageKey} is missing from messages!`)
  }

  return messages[messageKey]
}
