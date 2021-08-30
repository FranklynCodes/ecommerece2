import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";

import HomeScreen from "./components/Homescreen/Homescreen";
import ProductScreen from "./components/ProductScreen/ProductScreen";
import CartScreen from "./components/CartScreen/CartScreen";

function App() {
	return (		
		<Router>
			<h1>Ecommerce APP </h1>
			<NavBar />
			<main>
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/product/:id" component={ProductScreen} />
					<Route exact path="/cart" component={CartScreen} />
				</Switch>
			</main>
		</Router>
	);
}

export default App;
