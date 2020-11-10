import "./App.css";
import { Trans } from "@lingui/macro";
import LanguageSelector from "./LanguageSelector";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					<Trans>HELLOO</Trans>
				</h1>
				<p>
					<Trans>it's me.</Trans>
				</p>
				<LanguageSelector />
			</header>
		</div>
	);
}

export default App;
