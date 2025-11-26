import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchPlant = () => {
    const apiKey = import.meta.env.VITE_PERENUAL_API_KEY;
    const TapiKey = import.meta.env.VITE_TREFLE_TOKEN;
	const [loading, setLoading] = useState(true);
	const [allPlants, setAllPlants] = useState([]);
	const [error, setError] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setLoading(true);
		setError(null);

		try {
			/* const response = await fetch(
				"https://trefle.io/api/v1/plants/search?token=${VITE_TREFLE_TOKEN}&q=coconut",
				{ mode: "cors" }
			); */
			const response = await fetch(
				`https://perenual.com/api/v2/species-list?key=${apiKey}&q=${searchTerm}`,
				{ mode: "cors" }
			);

			if (!response.ok) throw new Error(`HTTP ${response.status}`);

			const data = await response.json();
			console.log(data);
			setAllPlants(data.data || []);
			console.dir(data);
		} catch (error: any) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container-fluid">
			<div className="row ">
				<form
					onSubmit={handleSubmit}
					className="col-12 col-sm-12 col-md-8 col-lg-6 mx-auto">
					<InputGroup className="mb-3" size="lg">
						<Form.Control
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							placeholder="Enter a plant name"
							aria-label="Enter a plant name"
							aria-describedby="basic-addon2"
						/>
						<Button
							type="submit"
							className="custom-primary"
							variant="primary"
							id="button-addon2">
							Search
						</Button>
					</InputGroup>
				</form>
				{loading && <p>Loading...</p>}
				{error && <p> Error: </p>}

				<div className="d-flex flex-wrap justify-content-center gap-4">
					{allPlants.map((plant: any) => (
						<Link
							key={plant.id}
							to={`/plant/${plant.id}`}
							style={{
								textDecoration: "none",
								color: "inherit",
							}}>
							<Card
								style={{ width: "250px", height: "330px" }}
								className="shadow-sm">
								<Card.Img
									variant="top"
									src={
										plant.default_image?.thumbnail ||
										"final-proj/front-end-plant-dash/images" // todo 
									}
									alt={plant.common_name}
									style={{
										height: "160px",
										objectFit: "cover",
									}}
								/>
								<Card.Body>
									<Card.Title className="fs-5">
										{plant.common_name || "Unknown"}
									</Card.Title>
									<Card.Text className="text-muted">
										{plant.scientific_name || ""}
									</Card.Text>
								</Card.Body>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default SearchPlant;
