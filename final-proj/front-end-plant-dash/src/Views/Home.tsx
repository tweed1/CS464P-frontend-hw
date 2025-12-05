import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import SearchPlant from "../Components/SearchPlantDB";
import flower from "../images/half-main-flower.png";
import HardinessZones from "../Components/HardinessZones";

const Home = () => {
	useEffect(() => {
		document.title = "Home";
	});
	return (
		<div>
			
			<div className="justify-content-center d-flex flex-column container-fluid">
				<div className="intro-text-grid-container py-0">
					<h1 className="my-ultra ">
						Welcome to the Plantify Dashboard!
					</h1>
					<p className="my-agu fs-5 pb-5">- Plantify Your Life -</p>

					<SearchPlant />
				</div>
				<div className="container justify-content-center d-flex flex-column pt-5">
					<h2 className="my-ultra pb-0">Zone Map</h2>
				</div>
				<div className="zone-grid-container my-4">< HardinessZones /></div>
			</div>
		</div>
	);
};

export default Home;
