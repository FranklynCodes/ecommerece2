import React from "react";
import { Link } from "react-router-dom";

export default function Product({ imageUrl, description, price, name, productId }) {
	return (
		<div id="PRODUCT-SCREEN-STYLE">
			<img src={imageUrl} alt={name} />

			<div className="product-info">
				<p className="product-info-name">{name}</p>
				<p className="product-info-description">{description.substring(0, 100)}...</p>
				<p className="product-info-price">${price}</p>
				<Link to={`/product/${productId}`} className="product-info-button">
					View
				</Link>
			</div>
		</div>
	);
}
