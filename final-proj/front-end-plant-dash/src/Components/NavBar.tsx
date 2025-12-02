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
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import '../custom.css';
import flower from "../images/half-main-flower.png";

const Navbar = () => {
	return (
        <>
		<nav className="navbar navbar-expand-lg navbar-light navbar-brand custom-primary bg-gradient py-0 mx-0 ">
		
				<div className="container-fluid d-flex align-items-center justify-content-between " id="navbarSupportedContent">
                    <Link to="/" className="navbar-brand me-3 text-white my-agu">
                    PLANTIFY</Link>
					<ul className="navbar-nav flex-row mx-auto mb-2 mb-lg-0 ">
						<li className="nav-item px-2">
							<Link to="/" className="nav-link active text-white my-ultra">
								{" "}
								Home
							</Link>
						</li>
						<li className="nav- px-2">
							<Link to="/search" className="nav-link active text-white my-ultra">
								Search
							</Link>
						</li>
						<li className="nav-item px-2">
							<Link to="/zonemap" className="nav-link active text-white my-ultra">
								Zone Map
							</Link>
						</li>
					</ul>
                    <Button className="btn-secondary bd rounded-pill py-1 my-ultra">
                    mystery
                    </Button>
				</div>
			
		</nav>
        {/* Flower attached to navbar */}
        <Container fluid className="mx-0 px-0">
				<Row>
					<Col></Col>
					<Col></Col>
					<Col className="">
						<Image
							src={flower}
							alt="logo"
							rounded
							width={150}
							height={75}></Image>
					</Col>
				</Row>
			</Container>
        </>
	);
};

export default Navbar;
