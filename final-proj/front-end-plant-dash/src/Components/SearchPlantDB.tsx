import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useEffect, useState } from "react";

const SearchPlant = () => {
	const [loading, setLoading] = useState(true);
	const [allPlants, setAllPlants] = useState([]);
	const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const response = await fetch(
				"https://trefle.io/api/v1/plants/search?token=usr-qMksMvISp83NrSekry0BWqRfjpwn6sT3zrX2fRaO_h8&q=coconut",
				{ mode: "cors" }
			);
            /* const response = await fetch(
				"https://perenual.com/api/v2/species-list?key=sk-KInu691bfa63a7b3213267",
				{ mode: 'cors' }
			); */

			// if (!response.ok) throw new Error(`HTTP ${response.status}`);

			const data = await response.json();
			console.log(data);
			setAllPlants(data);
			console.dir(data);
		} catch (error) {
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
			</div>
		</div>
	);
};

export default SearchPlant;
