import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import { Radar } from "react-chartjs-2";
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

const RadarChart = () => {
    const [ships, setShips] = useState([]);
    const [loading, setLoading] = useState(true);

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
    }, []);

    const data = {
        labels: ["Crew", "Passengers", "Cargo Capacity", "test", "test2", "test3"],
        datasets: ships.map((ship, index) => ({
            label: ship.name,
            data: [ship.crew, ship.passengers, ship.cargo_capacity, 500000000000, 100000000000, 200000000000],
            fill: true,
            backgroundColor: 'rgba(92, 70, 26, 0.2)',
            borderColor: 'rgba(103, 164, 63, 1)',
            borderWidth: 3,
        })),
    };

    const options = {
        responsive: true,
        scales: {
            r: {
                beginAtZero: true,
                angleLines: { color: "#ccc" },
                grid: { color: "#ddd" },
                pointLabels: { font: { size: 14 } },
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
                <Container fluid="sm" className="zone-radar-chart my-ultra">
					<h2>Hardiness Zone Climate Forcast</h2>
                    <p>Based on common statistics from the plants in that zone</p>
                    <Radar data={data} options={options} />
				</Container>
            )}
        </div>
    );
};

export default RadarChart;
