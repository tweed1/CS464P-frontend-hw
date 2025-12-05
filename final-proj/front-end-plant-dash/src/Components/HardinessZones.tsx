import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import { useNavigate } from "react-router-dom";

// simple color scale for zones 1..13 (you can refine)
const zoneColors = [
	"#f7fbff",
	"#deebf7",
	"#c6dbef",
	"#9ecae1",
	"#6baed6",
	"#3182bd",
	"#08519c",
	"#fdd0a2",
	"#fdae6b",
	"#fd8d3c",
	"#f16913",
	"#d94801",
	"#8c2d04",
];

function getColorForZone(n) {
	const i = Math.max(1, Math.min(13, Math.round(Number(n)))); // clamp
	return zoneColors[i - 1] || "#ccc";
}

const HardinessZonesMap = () => {
	const navigate = useNavigate();
	const [geo, setGeo] = useState(null);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Option A: fetch the geojson from public/ (recommended)
		const fetchData = async () => {
			try {
				const response = await fetch("/ophz/ophz.geojson");
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const jsonData = await response.json();
				setGeo(jsonData);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
            fetchData();
		/* const response = fetch("/ophz/ophz.geojson")
			.then((r) => {
				setGeo(r.data);
			})
			.catch((error) => console.error(error)); */

		/* .get("/ophz/ophz-us48.geojson")
			.then((r) => setGeo(r.data))
			.catch((err) => {
				console.error("Failed loading geojson", err);
			}); */

		// Option B: fetch raw from GitHub (slower) - example:
		// axios.get('https://raw.githubusercontent.com/kgjenkins/ophz/master/topojson/ophz-us48-topo.json')
	}, []);

	const style = (feature) => {
		// adapt property name to match your geojson file
		const rawZone =
			feature.properties?.ZONE ??
			feature.properties?.PHZ ??
			feature.properties?.value;
		// convert things like "7a" -> 7, or "3-5" -> 3 (or use range)
		const zone = String(rawZone).replace(/[^\d-]/g, ""); // crude
		return {
			fillColor: getColorForZone(zone.split("-")[0]),
			weight: 1,
			opacity: 1,
			color: "white",
			fillOpacity: 0.8,
		};
	};

	const onEachFeature = (feature, layer) => {
		const rawZone =
			feature.properties?.ZONE ?? feature.properties?.value ?? "unknown";
		const zone = String(rawZone);
		layer.on({
			click: () => {
				// navigate to zone page
				// normalize zone to integer or a range string
				const normalized = zone.replace(/[a-z]/i, "").trim();
				navigate(`/zone/${normalized}`);
			},
		});
		const label = `Zone: ${zone}`;
		layer.bindTooltip(label);
	};

	return (
			<MapContainer
				center={[39.5, -98.35]}
				zoom={4}
				style={{ height: "90%", width: "80%" }}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				{geo && (
					<GeoJSON
						data={geo}
						style={style}
						onEachFeature={onEachFeature}
					/>
				)}
			</MapContainer>
	);
};

export default HardinessZonesMap;
