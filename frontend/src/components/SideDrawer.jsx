import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SideDrawer({ show, click }) {
	const sideDrawerClass = ["sidedrawer"];

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	if (show) {
		// Animation via css class
		sideDrawerClass.push("show");
	}

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	};
	return (
		<div className={sideDrawerClass.join(" ")}>
			<ul className="sidedrawer-links" onClick={click}>
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="sidedrawer-cartbadge">{getCartCount()}</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
		</div>
	);
}
