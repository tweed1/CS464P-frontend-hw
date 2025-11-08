/* Used a bootstrap template for the navbar */

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient pb-0">
			<div className="container-fluid">
				<div className="" id="navbarSupportedContent">
					<ul className="navbar-nav flex-row me-auto mb-2 mb-lg-0">
						<li className="nav-item px-2">
							<Link to="/" className="nav-link active">
								{" "}
								Home
							</Link>
						</li>
						<li className="nav- px-2">
							<Link to="/list" className="nav-link active">
								List
							</Link>
						</li>
						<li className="nav-item px-2">
							<Link to="/population" className="nav-link active">
								Population
							</Link>
						</li>
						<li className="nav-item px-2">
							<Link
								to="/populationdistribution"
								className="nav-link active">
								Population Distribution
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
