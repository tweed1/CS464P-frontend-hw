import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { Radar } from "react-chartjs-2";
import { useParams, useSearchParams } from "react-router";

import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

const RadarChart = (props: { zoneId: string }) => {
	type ZoneData = {
		edibleLeaf: number;
		edibleFruit: number;
		cuisine: number;
		medicinal: number;
		poisonousToHumans: number;
		poisonousToPets: number;
		fruits: number;
	};
	const [ships, setShips] = useState([]);
	const [details, setDetails] = useState<null | ZoneData>(null);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"../graph_data/zone_analysis.json"
				);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const jsonData = await response.json();
				console.dir(jsonData);
				console.dir(jsonData[props.zoneId]);

				setDetails(jsonData[props.zoneId]);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);
	/* 
    useEffect(() => {
        const fetchShips = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/starships/");
                const data = await response.json();

                const cleaned = data.results.slice(0, 5).map((ship) => ({
                    name: ship.name,
                    crew: parseInt(ship.crew.replace(/,/g, "")) || 0,
                    passengers: parseInt(ship.passengers.replace(/,/g, "")) || 0,
                    cargo_capacity:
                        parseInt(ship.cargo_capacity.replace(/,/g, "")) || 0,
                }));

                setShips(cleaned);
                setLoading(false);
            } catch (err) {
                console.error("Error:", err);
                setLoading(false);
            }
        };

        fetchShips();
    }, []); */

	if (details === null) {
		return (
			<div>
				<p> loading</p>
			</div>
		);
	}

	const data = {
		labels: [
			"Edible Leaf",
			"Edible Fruit",
			"Used in Cuisine",
			"Medicinal",
			"Poisonous to Humans",
			"Poisonous to Pets",
			"Has Fruits",
		],
		datasets: [
			{
				label: `Zone ${props.zoneId} Plant Consumption Stats`,
				data: [
					details.edibleLeaf,
					details.edibleFruit,
					details.cuisine,
					details.medicinal,
					details.poisonousToHumans,
					details.poisonousToPets,
					details.fruits,
				],
				fill: true,
				backgroundColor: "rgba(92, 70, 26, 0.2)",
				borderColor: "rgba(103, 164, 63, 1)",
				borderWidth: 3,
			},
		],
	};

	const options = {
		responsive: true,
		scales: {
			r: {
				beginAtZero: true,
				angleLines: { color: "#a2a2a2ff" },
				grid: { color: "#a2a2a2ff" },
				pointLabels: { font: { size: 14 , weight: "bold",} },
			},
		},
		plugins: {
			legend: { position: "top" },
		},
	};

	return (
		<div>
			{loading ? (
				<p>Loading radar data...</p>
			) : (
				<Container fluid="lg" className="zone-radar-chart my-ultra">
					<h2>Can it Consumify?</h2>
					<p>
						What's the average edibleness profile in this zone?
					</p>
					<Radar data={data} options={options} />
				</Container>
			)}
		</div>
	);
};

export default RadarChart;

/* 
soil
sunlight

drought tolerant
salt tolerant
invasive
tropical
rare
indoor
fruits
flowers

origin
cycle
watering

consumption profile:
edible_leaf,
edible_fruit
cuisine
medicinal
poisonous_to_humans
poisonous_to_pets
fruits
harvest season


x% of plants in in zone y are perennial



*/
