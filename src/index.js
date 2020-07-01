import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import About from "views/Components/About.js";

var hist = createBrowserHistory();

ReactDOM.render(
	<Router history={hist}>
		<Switch>
			<Route path="/:locale/about" component={About} />
			<Route path="/" component={Components} />
			<Route path="/:locale" component={Components} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
