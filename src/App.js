import logo from './logo.svg';
import './App.css';
import Consuming from "./Components/Consuming";
import MouseMove from "./Components/MouseMove";
import Position1 from "./Components/Position1";
import Position2 from "./Components/Position2";

function App() {
  return (
		<div className="App">
			<MouseMove />
			<Consuming />
			<Position1 />
			<Position2 />
		</div>
	);
}

export default App;