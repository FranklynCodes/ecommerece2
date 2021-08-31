import React from "react";
import { Link } from "react-router-dom";

export default function SideDrawer({ show, click }) {
	const sideDrawerClass = ["sidedrawer"];

	if (show) {
		// Animation via css class
		sideDrawerClass.push("show");
	}
	return (
		<div className={sideDrawerClass.join(" ")}>
			<ul className="sidedrawer-links" onClick={click}>
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="sidedrawer-cartbadge">0</span>
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
