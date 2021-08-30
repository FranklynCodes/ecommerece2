import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav id="NavBarStyles">
			<div className="navBar-Logo">
				<h2></h2>
			</div>
			<ul className="navBar-Links">
				<li>
					<Link to="/cart">
						<i className="fas fa-shopping-cart"></i>
						CART
						<span className="navBar-cartLogoNumber">0</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						Shop
						<span className="navBar-cartLogoNumber">5</span>
					</Link>
				</li>
			</ul>
			<div className="navBar-HamburgerMenu">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}
