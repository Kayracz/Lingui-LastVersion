import React, { useEffect } from "react";
import { render } from "react-dom";
import App from "./App";

import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { defaultLocale, dynamicActivate } from "./i18n";

const Translation = () => {
	useEffect(() => {
		// With this method we dynamically load the catalogs
		dynamicActivate(defaultLocale);
	}, []);

	return (
		<I18nProvider i18n={i18n}>
			<App />
		</I18nProvider>
	);
};

render(<Translation />, document.getElementById("root"));

// import { es } from "make-plural/plurals";

// import catalogEn from "./locales/en/messages.js";
// import catalogEs from "./locales/es/messages.js";
// import catalogFr from "./locales/fr/messages.js";

// i18n.loadLocaleData("es", { plurals: es });
// i18n.load({
// 	en: catalogEn.messages,
// 	fr: catalogFr.messages,
// 	es: catalogEs.messages,
// });
// // i18n.load("es", messages);

// i18n.activate("es");

// const Translation = () => (

// 	<I18nProvider i18n={i18n}>
// 		<App />
// 	</I18nProvider>
// );
