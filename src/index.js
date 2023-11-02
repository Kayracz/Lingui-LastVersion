import React from "react";
import { render } from "react-dom";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { getLocale, dynamicActivate } from "./i18n";
import App from "./App";
import "./app.css";

dynamicActivate(getLocale());

const Translation = () => {
	return (
		<I18nProvider i18n={i18n}>
			<App />
		</I18nProvider>
	);
};

render(<Translation />, document.getElementById("root"));