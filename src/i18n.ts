// @lingui/core package provides the main i18n object which manages message catalogs, active locale as well as translation and formatting of messages.
import { i18n } from "@lingui/core";
// import plural rules for all locales
import { en, es, fr } from "make-plural/plurals";
//locale detector
import {
	detect,
	fromUrl,
	fromStorage,
	fromNavigator,
} from "@lingui/detect-locale";

export const defaultLocale = "en";

// export const locales = {
// 	en: "English",
// 	es: "Spanish",
// 	fr: "French",
// };

// DEFINES WHERE THE LOCALE FALLS BACK TO (pased to dynamicActivate).
const LOCAL_STORAGE_KEY = "lang";

// returns locale
// detect method from "@lingui/detect-locale"
export function getLocale() {
	const detectedLocale = detect(
		fromUrl("lang"), // for example http://localhost:3000/?lang=es
		fromStorage("lang"), //mykey
		fromNavigator(), // from system settings
		LOCAL_STORAGE_KEY
	);
	return detectedLocale;
}

i18n.loadLocaleData({
	en: { plurals: en },
	es: { plurals: es },
	fr: { plurals: fr },
});

// Load messages for requested locale and activate it.
export async function dynamicActivate(locale: string) {
	const { messages } = await import(`./locales/${locale}/messages`);
	// Load catalog for given locale or load multiple catalogs at once.
	i18n.load(locale, messages);
	// Activate a locale and locales. _() from now on will return messages in given locale.
	i18n.activate(locale);
	// Saving the locale each time the dynamicActivate() gets called:
	window.localStorage.setItem(LOCAL_STORAGE_KEY, locale);
}