import { i18n } from '@lingui/core';
import { en, es, fr } from 'make-plural/plurals'

export const locales = {
  en: "English",
  es: "Spanish",
  fr: "French",
};

export const defaultLocale = "fr";

i18n.loadLocaleData({
  en: { plurals: en },
  es: { plurals: es },
  fr: { plurals: fr },
})

/**
* We do a dynamic import of just the catalog that we need
* @param locale any locale string
*/

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`./locales/${locale}/messages`)
  i18n.load(locale, messages)
  i18n.activate(locale)
}

