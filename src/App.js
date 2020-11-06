import "./App.css";
import { Trans } from "@lingui/macro";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>
					<Trans>HELLOO</Trans>
				</h1>
				<p>
					<Trans>it's me.</Trans>
				</p>
			</header>
		</div>
	);
}

export default App;
