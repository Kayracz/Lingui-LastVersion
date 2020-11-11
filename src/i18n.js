import { i18n } from "@lingui/core";
import { detect, fromStorage, fromNavigator } from "@lingui/detect-locale";
import { en, es, fr } from "make-plural/plurals";

i18n.loadLocaleData({
	en: { plurals: en },
	es: { plurals: es },
	fr: { plurals: fr },
});

const LOCAL_STORAGE_KEY = "lang";

// defines where the locale falls back to (passed to dynamicActivate)
export const DEFAULT_LOCALE = "en";

export function getLocale() {
	const detectedLocale = detect(
		fromStorage(LOCAL_STORAGE_KEY),
		fromNavigator(), // from system settings
		DEFAULT_LOCALE
	);
	return detectedLocale;
}

/**
 * Load messages for requested locale and activate it.
 */
export async function dynamicActivate(locale) {
	try {
		const module = await import(`./locales/${locale}/messages`);

		i18n.load(locale, module.messages);
		i18n.activate(locale);

		// saves the language to the localStorage
		window.localStorage.setItem(LOCAL_STORAGE_KEY, locale);
	} catch (error) {
		console.log(error);
	}
}
