import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SearchPlant = () => {
	const apiKey = import.meta.env.VITE_PERENUAL_API_KEY;
	const tApiKey = import.meta.env.VITE_TREFLE_TOKEN;
	const [loading, setLoading] = useState(false);
	const [instruction, setInstruction] = useState(true);
	const [allPlants, setAllPlants] = useState([]);
	const [error, setError] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [lastPage, setLastPage] = useState(1);

	const fetchPlants = async (page = 1, term = searchTerm) => {
		try {
			setLoading(true);
			const response = await fetch(
				`https://perenual.com/api/v2/species-list?key=${apiKey}&q=${searchTerm}`,
				{ mode: "cors" }
			);

			if (!response.ok) throw new Error(`HTTP ${response.status}`);

			const data = await response.json();
			console.log(data);

			setAllPlants(data.data ?? []);
			console.dir(data);
            setCurrentPage(data.current_page);
            setLastPage(data.last_page);
		} catch (error: any) {
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setInstruction(false);
		setError(null);
        setCurrentPage(1);
        fetchPlants(1, searchTerm);

    const goToNextPage = () => {
        if (currentPage < lastPage) fetchPlants(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) fetchPlants(currentPage - 1);
    };

	};

	return (
		<div className="container-fluid">
			<div className="d-flex flex-column">
				<form
					onSubmit={handleSubmit}
					className="col-12 col-sm-12 col-md-8 col-lg-6 mx-auto">
					<h2 className="text-start ps-2 my-ultra fs-1">Explore</h2>
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
				{instruction && (
					<p>Click "Search" with no input to search all plants</p>
				)}
				{loading && <p>Loading...</p>}
				{error && <p> Error: </p>}

				<div className="d-flex flex-wrap justify-content-center gap-4 card-container">
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
