import { i18n } from "@lingui/core";
import {
	detect,
	fromUrl,
	fromStorage,
	fromNavigator,
} from "@lingui/detect-locale";
import { en, es, fr } from "make-plural/plurals";

i18n.loadLocaleData({
	en: { plurals: en },
	es: { plurals: es },
	fr: { plurals: fr },
});

const LOCAL_STORAGE_KEY = "lang";

// Defines where the locale falls back to (passed to dynamicActivate).
export const DEFAULT_LOCALE = "en";

export function getLocale() {
	const detectedLocale = detect(
		fromUrl("lang"), // for example http://localhost:3000/?lang=es
		fromStorage("lang"), //mykey
		fromNavigator(), // from system settings
		LOCAL_STORAGE_KEY,
		DEFAULT_LOCALE
	);
	return detectedLocale;
}

/**
 * Load messages for requested locale and activate it.
 */
export async function dynamicActivate(locale: string) {
	let module;

	try {
		module = await import(`./locales/${locale}/messages`);
	} catch (error) {
		console.log(error);
	}

	i18n.load(locale, module.messages);
	i18n.activate(locale);
	window.localStorage.setItem(LOCAL_STORAGE_KEY, locale);
}
