import React, { useEffect, useState } from "react";

import { Bar } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
	const [countryData, setCountryData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCountryData = async () => {
			try {
				const response = await fetch(
					"https://restcountries.com/v3.1/region/south%20america"
				);
				const data = await response.json();
				setCountryData(data);

				const populationData = data.map((country) => ({
					name: country.name.common,
					population: country.population || 0,
				}));

				populationData.sort((a, b) => b.population - a.population);

				setCountryData(populationData);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchCountryData();
	}, []);

	const data = {
		labels: countryData.map((country) => country.name),
		datasets: [
			{
				label: "Population",
				data: countryData.map((country) => country.population),
				backgroundColor: "#42A5F5",
				borderColor: "#1E88E5",
				borderWidth: 1,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "Population of South American Countries",
				font: {
					size: 24,
				},
				padding: {
					bottom: 20,
				},
			},
			legend: {
				display: false,
			},
			tooltip: {
				enabled: true,
			},
		},
		scales: {
			x: {
				title: {
					display: true,
					text: "countries",
				},
			},
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: "population",
				},
			},
		},
	};

	return (
		<div>
			{loading ? (
				<p>Loading data...</p>
			) : (
				<>
					<h1>Population Data</h1>
					<br />
					<Bar data={data} options={options} />
				</>
			)}
		</div>
	);
};

export default BarChart;
