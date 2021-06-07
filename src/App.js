import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./views/Home";
import Abstract from "./views/Abstract";
import Example from "./views/Example";
import NotFound from "./views/NotFound";

function Routes() {
	return (
		<Router>
			<Switch>
        <Route exact path="/" component={Home} />
				<Route exact path="/abstract" component={Abstract} />
        <Route exact path="/example" component={Example} />
				<Route component={NotFound} />
			</Switch>
		</Router>
	);
}

function App() {
  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
