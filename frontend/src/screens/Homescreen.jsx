import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Components
import Product from "../components/Product";

// Actions
import { getProducts as imptListProducts } from "../redux/actions/productAction.js";

export default function Homescreen() {
	const dispatch = useDispatch();

	const getProducts = useSelector((state) => {
		state.getProducts;
	});

	// Destructure, getproducts to get products array
	const { products, loading, error } = getProducts;

	useEffect(() => {
		dispatch(imptListProducts());
	}, [dispatch]);

	return (
		<div id="HOMESCREEN-STYLE">
			<h2 className="homescreen-title">Latest Products</h2>
			<div className="homescreen-products">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2> {error} </h2>
				) : (
					products.map((product) => {
						<Product
							key={product._id}
							productid={product._id}
							name={product.name}
							price={product.price}
							description={product.description}
							imageUrl={product.imageUrl}
						/>;
					})
				)}
			</div>
		</div>
	);
}
