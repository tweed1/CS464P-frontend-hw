import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import SearchPlant from "../Components/SearchPlantDB"

const ZoneMap = () => {
    useEffect(() => {
        document.title = 'Hardiness Zones'
    },[])

	return (
		<div className="pt-4 search-page">
			<div className="container justify-content-center d-flex flex-column pt-5">
				<h2 className="my-ultra pb-0">Zone Map</h2>
			</div>
			<div className="zone-grid-container pb-4">
				<div className="zone-item">hi</div>
			</div>
		</div>
	);
};

export default ZoneMap;