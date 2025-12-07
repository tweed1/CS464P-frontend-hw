import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import ZoneBarChart from "../Components/ZoneBarChart";
import ZoneRadarChart from "../Components/ZoneRadarChart";
import Results from "../Components/ZoneResultsList";
import { Col, Container, Row } from "react-bootstrap";

/* https://perenual.com/api/v2/species-list?key=[YOUR-API-KEY]&hardiness=1-13 */

const Zone = () => {
	const apiKey = import.meta.env.VITE_PERENUAL_API_KEY;
	const [loading, setLoading] = useState(false);
	const [instruction, setInstruction] = useState(true);
	const [allPlants, setAllPlants] = useState([]);
	const [error, setError] = useState(null);
	const params = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	const pageNumber = Number(searchParams.get("page") ?? 1);

	useEffect(() => {
		document.title = "zone";

		/* const fetchData = async () => {
			setInstruction(false);
			setError(null);

			try {
				setLoading(true);
				const response = await fetch(
					`https://perenual.com/api/v2/species-list?key=${apiKey}&hardiness=${params.id}`,
					{ mode: "cors" }
				);
				if (!response.ok) throw new Error(`HTTP ${response.status}`);

				const data = await response.json();
				console.log(data);

				setAllPlants(data.data ?? []);
				console.dir(data);
			} catch (error: any) {
				setError(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData(); */
	}, [params.id]);

	return (
		<div className="m-0 search-page pb-5 pt-2">
			<div>
				<Container fluid className="m-0 p-0">
					<Row className="p-0">
						<Col lg={6} sm={12} className="p-0 custom-border">
							<h2 className="my-ultra">
								Plants in Zone {params.id}
							</h2>
							<Results />
						</Col>
						<Col lg={6} sm={12} className="">
							<div>
								<ZoneRadarChart zoneId={params.id} />
							</div>
							<div>
								<ZoneBarChart />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default Zone;
