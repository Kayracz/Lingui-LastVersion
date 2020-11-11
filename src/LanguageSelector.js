import React from "react";
import { useLingui } from "@lingui/react";
import { dynamicActivate } from "./i18n";

const LanguageSelector = () => {
	const { i18n } = useLingui();

	return (
		<div>
			<p>Current locale: {i18n.locale}</p>
			<button
				onClick={() => dynamicActivate("en")}
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
