import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import SearchPlant from "../Components/SearchPlantDB";
import { useParams, useSearchParams } from "react-router";

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

		const fetchData = async () => {
			setInstruction(false);
			setError(null);

			/* try {
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
			} */
		};
		fetchData();
	}, [params.id]);
	function goToNextPage() {
		setSearchParams({ page: String(pageNumber + 1) });
	}
    function goToPrevPage() {
		setSearchParams({ page: String(pageNumber -1) });
	}

	return (
		<div className="pt-4 search-page">
			<div>
				<h1 className="my-ultra">{params.id}</h1>
				<h2>{pageNumber}</h2>
                <button className="btn btn-secondary" onClick={goToPrevPage}>
					Back
				</button>
				<button className="btn btn-primary" onClick={goToNextPage}>
					Next
				</button>
			</div>
		</div>
	);
};

export default Zone;
