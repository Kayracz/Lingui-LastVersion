import "./App.css";
import { Trans } from "@lingui/macro";
import LanguageSelector from "./LanguageSelector";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					<Trans>Salute</Trans>
				</h1>
				<p>
					<Trans>Me</Trans>
				</p>
				<LanguageSelector />
			</header>
		</div>
	);
}

export default App;
