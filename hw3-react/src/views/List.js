import React, { useEffect, useState } from "react";

const List = () => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

    useEffect(() => {
            document.title = 'List'
        })
        
	useEffect(() => {
		const fetchCountryData = async () => {
			try {
				const response = await fetch(
					"https://restcountries.com/v3.1/region/south%20america"
				);
				const data = await response.json();

				setCountries(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			} finally {
				setLoading(false);
			}
		};

		fetchCountryData();
	}, []);

	return (
		<section className="container pt-4">
			<div className="">
				<div className="card flex-fill gap-2">
					{countries.map((country) => (
						<div
							className="bg-dark rounded border border-dark card-body text-center text-light d-flex align-items-center">
							<img
								src={country.flags.png}
								alt={`Flag of ${country.name.common}`}
								className="me-2 "
							/>
							<div className="">
								<h1 className="card-title mb-1">
									{country.name.common}
								</h1>
								<p className="mb-0 p-2">
									Population {country.population.toLocaleString()}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default List;
