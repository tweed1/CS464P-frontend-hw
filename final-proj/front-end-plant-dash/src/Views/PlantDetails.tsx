import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import SearchPlant from "../Components/SearchPlantDB"

const PlantDetails = () => {
    useEffect(() => {
        document.title = 'Plant Details'
    },[])

	return (
		<div className="pt-4">
			<div className="flex-column d-flex align-items-start ">
                <img></img>
				<h1 className="my-ultra">Plant Name</h1>
                <h2 className="">Plant details, longer name, blah blah</h2>
                <p className="">More details </p>
			</div>
		</div>
	);
};

export default PlantDetails;