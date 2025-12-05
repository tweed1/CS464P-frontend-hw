import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
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
	const [planetData, setPlanetData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchPlanetData = async () => {
			try {
				const response = await fetch("https://swapi.dev/api/planets/");
				const data = await response.json();
				const planets = data.results;

				const planetPopulationData = planets.map((planet) => {
					let population = planet.population;

					// Check for 'unknown' or unavailable data
					if (population === "unknown" || population === "") {
						population = 0;
					} else {
						population = parseInt(population, 10);
					}

					return { name: planet.name, population };
				});

				// Sort planets by population in descending order - important when setting up a bar chart
				// planetPopulationData.sort((a, b) => b.population - a.population);
				const filteredPlanets = planetPopulationData.filter(
					(planet) => planet.population <= 10000000
				);
				setPlanetData(filteredPlanets);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchPlanetData();
	}, []);

	const data = {
		labels: planetData.map((planet) => planet.name),
		datasets: [
			{
				label: "Population",
				data: planetData.map((planet) => planet.population),
				backgroundColor: [
					"#177244",
					"#3B8751",
					"#5E9C5E",
					"#82B26C",
					"#A5C779",
					"#C9DC86",
				],
				borderColor: "#004040",
				borderWidth: 1,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "Population per Planet in Star Wars",
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
					text: "Planets",
				},
			},
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: "Population",
				},
			},
		},
	};

	return (
		<div>
			{loading ? (
				<p>Loading data...</p>
			) : (
				<Container fluid="sm">
					<h1>Population Data</h1>
					<br />
					<Bar data={data} options={options} />
				</Container>
			)}
		</div>
	);
};

export default BarChart;
