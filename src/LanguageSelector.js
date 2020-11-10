import React from "react";
import { useLingui } from "@lingui/react";
import { dynamicActivate } from "./i18n";

const LanguageSelector = () => {
	// using useLingui() to get i18n.locale which indicates current language
	// and setted the disabled flag on one of the buttons bellow.
	// const { i18n } = useLingui();
	const { i18n } = useLingui();
    // With this method I can dynamically load the catalogs from i18n.js.
    
	return (
		<div>
			<p>Current locale: {i18n.locale}</p>
			<button
				onClick={() => dynamicActivate("en")}
				// disabled when current locale matches "en"
				// ( === ) revisa si dos operandos son iguales y lo disable cuando si.
				disabled={i18n.locale === "en"}
			>
				English
			</button>
			<button
				onClick={() => dynamicActivate("fr")}
				disabled={i18n.locale === "fr"}
			>
				Français
			</button>
			<button
				onClick={() => dynamicActivate("es")}
				disabled={i18n.locale === "es"}
			>
				Español
			</button>
		</div>
	);
};

export default LanguageSelector;
