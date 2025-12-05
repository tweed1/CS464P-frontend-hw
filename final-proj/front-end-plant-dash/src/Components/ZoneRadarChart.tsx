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
        labels: ["Crew", "Passengers", "Cargo Capacity"],
        datasets: ships.map((ship, index) => ({
            label: ship.name,
            data: [ship.crew, ship.passengers, ship.cargo_capacity],
            fill: true,
            backgroundColor: `rgba(${50 + index * 40}, 150, 200, 0.2)`,
            borderColor: `rgba(${50 + index * 40}, 150, 200, 1)`,
            borderWidth: 2,
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
                <Container fluid="sm">
					<h2>Starship Stats (Radar Chart)</h2>
                    <Radar data={data} options={options} />
				</Container>
            )}
        </div>
    );
};

export default RadarChart;
