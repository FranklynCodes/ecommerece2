import React from "react";

import Product from "../components/Product";

export default function Homescreen() {
	return (
		<div id="HOMESCREEN-STYLE">
			<h2 className="homescreen-title">Latest Products</h2>
			<div className="homescreen-products">
				<Product />
				<Product />
				<Product />
				<Product />
			</div>
		</div>
	);
}
