import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import SearchPlant from "../Components/SearchPlantDB";
import flower from "../images/half-main-flower.png";

const Home = () => {
	useEffect(() => {
		document.title = "Home";
	});
	return (
		/* 		<div className="pt-4 container-fluid">
			<div className="">
				<h1 className="">Welcome to the Homepage!</h1>
			</div>
            <Button className="custom-primary" variant="primary">Click me</Button>
		</div> */
		<div>
			
			<div className="justify-content-center d-flex flex-column">
				<div className="intro-text-grid-container py-0">
					<h1 className="my-ultra ">
						Welcome to the Plantify Dashboard!
					</h1>
					<p className="my-agu fs-5 pb-5">- Plantify Your Life -</p>
					{/* <div className="intro-text-item mb-4">
					<p className="sans fw-semibold">
						On the Plantify Dashboard you can enjoy our easy-to-use
						search feature where you can: Search all or search by a
						specific name.
					</p>
					<p className="sans fw-semibold">
						Also enjoy our interactive hardiness zone map where you
						can easily find your zone and be directed a plant page
						all about that zone!
					</p>
				</div> */}

					<SearchPlant />
				</div>
				<div className="container justify-content-center d-flex flex-column pt-5">
					<h2 className="my-ultra pb-0">Zone Map</h2>
				</div>
				<div className="zone-grid-container pb-4">
					<div className="zone-item">hi</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
