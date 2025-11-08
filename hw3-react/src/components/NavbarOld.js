// now unused but I want to keep here for now
import React from "react";
import { Link } from "react-router-dom";

const NavbarOld = () => {
	return (
		<nav className="nav bg-dark">
			<ul className="navbar mb-0">
				<li className="nav-link py-0">
					<Link to="/">Home</Link>
				</li>
				<li className="nav-link py-0">
					<Link to="/list">List</Link>
				</li>
				<li className="nav-link py-0">
					<Link to="/population">Population</Link>
				</li>
				<li className="nav-link py-0">
					<Link to="/populationdistribution">
						Population Distribution
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarOld;
