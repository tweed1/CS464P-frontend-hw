import Button from "react-bootstrap/Button";
import SearchPlant from "../Components/SearchPlantDB";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import logo from "../images/logo.JPG";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { alignPropType } from "react-bootstrap/esm/types";

type Plant = {
	common_name: string;
	scientific_name: string[];
	family: string;
	origin: string[];
	cycle: string;
	sunlight: string[];
	hardiness: {
		min: string;
		max: string;
	};
	pest_susceptibility: string[];
	edible_to_humans: boolean;
	default_image: {
		license: 0;
		license_name: string;
		license_url: string;
		original_url: string;
		regular_url: string;
		medium_url: string;
		small_url: string;
		thumbnail: string;
	};
    other_images: {
		license: 0;
		license_name: string;
		license_url: string;
		original_url: string;
		regular_url: string;
		medium_url: string;
		small_url: string;
		thumbnail: string;
	}[];
};

const PlantDetails = () => {
	const apiKey = import.meta.env.VITE_PERENUAL_API_KEY;
	const [loading, setLoading] = useState(false);
	const [instruction, setInstruction] = useState(true);
	const [plant, setPlant] = useState<Plant | undefined>();
	const [error, setError] = useState<string | undefined>();
	const [searchTerm, setSearchTerm] = useState("");
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		document.title = "Plant Details";

		const id = Number(params.id);

		if (Number.isNaN(id) || !params.id) {
			setError("Invalid plant ID");
			return;
		}
		const fetchPlants = async () => {
			try {
				setLoading(true);
				const response = await fetch(
					`https://perenual.com/api/v2/species/details/${params.id}?key=${apiKey}`,
					{ mode: "cors" }
				);

				if (!response.ok) throw new Error(`HTTP ${response.status}`);

				const incomingData = await response.json();
				setPlant(incomingData);
			} catch (error: any) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchPlants();
	}, [params.id]);

	if (!plant) {
		return (
			<div>
				<p> loading</p>
			</div>
		);
	}
	return (
		<div className="pt-4">
			<Container fluid className="p-0">
				<Row>
					<Col md={3} className="p-0 border">
						{" "}
						<Image
							src={ plant.default_image.small_url ?? logo}
							style={{
                                width: "300px",
                                height: "300px",

								objectFit: "cover",
							}}
							rounded
						/>
					</Col>
					<Col
						md={8}
						className="p-0 mx-1 d-flex flex-column align-items-start">
						<h1 className="my-ultra">{plant.common_name} </h1>
						<h2 className="">{plant.scientific_name} </h2>
						<p className="">Family: {plant.family} </p>
						<p className="">Origin: {plant.origin.join(" ")}</p>
					</Col>
				</Row>
			</Container>

			<Container fluid className="p-0 my-4">
				<Row>
					<Col md={3} className="p-0"></Col>
					<div className="vr vr-style"></div>
					<Col
						md={8}
						className="p-0 mx-1 d-flex flex-column align-items-start">
						<div className="hr"></div>
						<p className="fs-4"> Cycle: {plant.cycle}</p>
						<p className="fs-4"> Watering: </p>
						<p className="fs-4">
							{" "}
							Sunlight: {plant.sunlight.join(" ")}
						</p>
						{plant.edible_to_humans && (
							<p className="fs-4"> Is edible</p>
						)}

						<p className="fs-4">
							{" "}
							Hardiness Zone: {plant.hardiness.min} -{" "}
							{plant.hardiness.max}
						</p>
						<p className="fs-4">
							Pests: {plant.pest_susceptibility.join(" ")}
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default PlantDetails;
