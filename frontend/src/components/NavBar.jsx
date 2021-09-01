import { Link } from "react-router-dom";

export default function NavBar({ click }) {
	return (
		<nav id="NAV-BAR-STYLES">
			<div className="navbar-logo">
				<h2>MERN Ecommerce</h2>
			</div>
			<ul className="navbar-links">
				<li>
					<Link to="/cart" className="navbar-cart-link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart <span className="navbar-cart-number">0</span>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">Shop</Link>
				</li>
			</ul>
			<div className="navbar-hamburger-menu" onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
}