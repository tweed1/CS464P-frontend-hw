import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import SearchPlant from "../Components/SearchPlantDB";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../images/logo.JPG";

const PlantDetails = () => {
	useEffect(() => {
		document.title = "Plant Details";
	}, []);

	return (
		<div className="pt-4">
			<Container>
				<Row>
					<Col md={3} >
						{" "}
						<Image
							src={logo}
							style={{
								height: "160px",
								width: "180px",
								objectFit: "cover",
								/* display: "block",
                                        margin: "0 auto", */
							}}
							rounded
						/>
					</Col>
					<Col md={9}>
						<Row>col 2 row 1</Row>
						<Row> col 2 row 2</Row>
					</Col>
				</Row>
			</Container>
			<div className="flex-column d-flex align-items-start ">
				<img></img>
				<h1 className="my-ultra">Plant Name</h1>
				<h2 className="">Plant details, longer name, blah blah</h2>
				<p className="">More details </p>
			</div>
		</div>
	);
};

export default PlantDetails;
