import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import SearchPlant from "../Components/SearchPlantDB"

const Search = () => {
    useEffect(() => {
        document.title = 'Search'
    },[])

	return (
		<div className="pt-4">
			<div>
				<h1>Welcome to the Search Page!</h1>
			</div>
            <SearchPlant/>
		</div>
	);
};

export default Search;
