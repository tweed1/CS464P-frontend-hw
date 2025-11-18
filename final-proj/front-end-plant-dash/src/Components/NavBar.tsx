/* Used a bootstrap template for the navbar */

/* import { Link } from "react-router";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary">
			<Container>
				<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Link</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
 */

/* Used a bootstrap template for the navbar */

import { Link } from "react-router";
import Button from "react-bootstrap/Button";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light navbar-brand custom-nav-bg bg-gradient py-0 mx-0">
		
				<div className="container-fluid d-flex align-items-center justify-content-between" id="navbarSupportedContent">
                    <Link to="/" className="navbar-brand me-3">
                    PLANT</Link>
					<ul className="navbar-nav flex-row mx-auto mb-2 mb-lg-0">
						<li className="nav-item px-2">
							<Link to="/" className="nav-link active">
								{" "}
								Home
							</Link>
						</li>
						<li className="nav- px-2">
							<Link to="/search" className="nav-link active">
								Search
							</Link>
						</li>
						<li className="nav-item px-2">
							<Link to="/population" className="nav-link active">
								Page3
							</Link>
						</li>
						<li className="nav-item px-2">
							<Link
								to="/populationdistribution"
								className="nav-link active">
								Page4
							</Link>
						</li>
					</ul>
                    <Button className="custom-primary rounded-pill py-1">
                    button?
                    </Button>
				</div>
			
		</nav>
	);
};

export default Navbar;
