import React, { useEffect, useState } from "react";

import { Doughnut } from "react-chartjs-2";
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	Title,
	CategoryScale,
	Colors,
} from "chart.js";

import {
    donutChartColors,
} from "./../utils/chartColors.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale, Colors);

const DonutChart = () => {
	const [countryData, setCountryData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [totalPopulation, setTotalPopulation] = useState(0);
	const [otherCountries, setOtherCountries] = useState([]);

	useEffect(() => {
		const fetchCountryData = async () => {
			try {
				const response = await fetch(
					"https://restcountries.com/v3.1/region/south%20america"
				);
                if (!response.ok) throw new Error(`HTTP ${response.status}`)
				const data = await response.json();

				const formatData = data.map((country) => ({
					name: country.name.common,
					population: country.population,
				}));

				const sorted = formatData.sort(
					(a, b) => b.population - a.population
				);

                // get total population to be able to get percentage 
				const total = sorted.reduce((sum, c) => sum + c.population, 0);
				setTotalPopulation(total);

                // is there a better place for these declarations to go?
				const majorCountries = [];
				const smallerCountries = [];
				let otherPopulation = 0; // total for 'other' population category

                // check and sort into smaller or major countries
				sorted.forEach((country) => {
					const percent = (country.population / total) * 100;
					if (percent < 2) {
						otherPopulation += country.population;
						smallerCountries.push(country.name);
					} else {
						majorCountries.push(country);
					}
				});

                // check presence of those smaller countries then add 'Other' to it 
				if (otherPopulation > 0) {
					majorCountries.push({
						name: "Other",
						population: otherPopulation,
					});
					setOtherCountries(smallerCountries);
				}

				setCountryData(majorCountries);
				
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
                setLoading(false);
            }
		};
		fetchCountryData();
	}, []);

	// Prepare chart data
	const data = {
		labels: countryData.map((item) => item.name),
		datasets: [
			{
				label: "Population",
				data: countryData.map((item) => item.population),
				backgroundColor: donutChartColors.slice(0, countryData.length),
				borderWidth: 2,
				hoverOffset: 8,
			},
		],
	};

	const options = {
		responsive: true,
		plugins: {
			title: {
				display: true,
				text: "Population distribution of South American countries",
				font: {
					size: 22,
				},
			},
            /* I wasn't sure how to format the 'Other' category but thought it was 
            important for the donut diagram. In urgency of time, line 109-127 is AI generated */
			tooltip: { 
				callbacks: {
					label: (context) => {
						const country = context.label;
						const population = context.raw.toLocaleString();
						const percent = (
							(context.raw / totalPopulation) *
							100
						).toFixed(2);

						if (country === "Other" && otherCountries.length > 0) {
							return [
								`${country}: ${population} (${percent}%)`,
								`Includes: ${otherCountries.join(", ")}`,
							];
						}
						return `${context.label}: ${population} (${percent}%)`;
					},
				},
			},
			legend: { position: "bottom" },
		},
	};

	return (
		<div>
			{loading ? (
				<p>Loading data...</p>
			) : (
				<>
					<h1>Population Distribution</h1>
					<div className="container">
						<Doughnut data={data} options={options} />
					</div>
				</>
			)}
		</div>
	);
};

export default DonutChart;
