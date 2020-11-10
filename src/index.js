import React, { useEffect } from "react";
import { render } from "react-dom";
import App from "./App";

import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { getLocale, dynamicActivate } from "./i18n";

// console.log(i18n);
// window.BLA = i18n;

const Translation = () => {
	// useEffect runs after every render and can optionally clean up for itself before it runs again.
	// By using this Hook, you tell React that your component needs to do something after render.
	//  React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
	useEffect(() => {
		// With this method I can dynamically load the catalogs from i18n.js.
		dynamicActivate(getLocale());
	}, []);

	return (
		<I18nProvider i18n={i18n}>
			<App />
		</I18nProvider>
	);
};

render(<Translation />, document.getElementById("root"));
//Usar useState, un if statement or what para el defaultlocale??
