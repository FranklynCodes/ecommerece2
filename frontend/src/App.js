import React, { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./components/Homescreen/Homescreen";
import ProductScreen from "./components/ProductScreen/ProductScreen";
import CartScreen from "./components/CartScreen/CartScreen";

import NavBar from "./components/NavBar/NavBar";
import BackDrop from "./components/BackDrop/BackDrop";
import SideDrawer from "./components/SideDrawer/SideDrawer";

function App() {
	const [sideDrawerToggle, setSideDrawerToggle] = useState(false);
	return (
		<Router>
			<NavBar
				click={() => {
					setSideDrawerToggle(true);
				}}
			/>
			<SideDrawer show={sideDrawerToggle} />
			
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
