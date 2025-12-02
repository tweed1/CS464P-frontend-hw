import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import SearchPlant from "../Components/SearchPlantDB"

const Search = () => {
    useEffect(() => {
        document.title = 'Search'
    },[])

	return (
		<div className="pt-4 search-page">
			<div>
				<h1 className="my-ultra"></h1>
			</div>
            <SearchPlant/>
		</div>
	);
};

export default Search;
