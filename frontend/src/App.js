import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screens/Homescreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

import NavBar from "./components/NavBar";
import BackDrop from "./components/BackDrop";
import SideDrawer from "./components/SideDrawer";

function App() {
	const [sideDrawerToggle, setSideDrawerToggle] = useState(false);
	return (
		<Router>
			<NavBar
				click={() => {
					setSideDrawerToggle(true);
				}}
			/>
			<SideDrawer
				show={sideDrawerToggle}
				click={() => {
					setSideDrawerToggle(true);
				}}
			/>

			<BackDrop
				show={sideDrawerToggle}
				click={() => {
					setSideDrawerToggle(false);
				}}
			/>
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
