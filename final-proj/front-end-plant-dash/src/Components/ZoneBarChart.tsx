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

const BarChart = (props: { zoneId: string }) => {
	type Entry = {
		total: number;
		percentage: number;
	};
	type ZoneData = {
		edibleLeaf: Entry;
		edibleFruit: Entry;
		cuisine: Entry;
		medicinal: Entry;
		poisonousToHumans: Entry;
		poisonousToPets: Entry;
		fruits: Entry;
	};
	const [details, setDetails] = useState<undefined | ZoneData>(undefined);
	const [error, setError] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"../graph_data/zone_analysis_2.json"
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

	if (!details) {
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
				label: `Zone ${props.zoneId} Edibleness Totals`,
				data: [
					details.edibleLeaf.total,
					details.edibleFruit.total,
					details.cuisine.total,
					details.medicinal.total,
					details.poisonousToHumans.total,
					details.poisonousToPets.total,
					details.fruits.total,
				],
				backgroundColor: [
					"#0f5231ff",
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
				text: "test",
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
					text: "",
				},
			},
			y: {
				beginAtZero: true,
				title: {
					display: true,
					text: "Count",
				},
			},
		},
	};

	return (
		<div>
			{loading ? (
				<p>Loading data...</p>
			) : (
				<Container fluid="sm" className="my-ultra">
					<h3>Zone {props.zoneId} Edibleness Totals</h3>
					<br />
					<Bar data={data} options={options} />
				</Container>
			)}
		</div>
	);
};

export default BarChart;
