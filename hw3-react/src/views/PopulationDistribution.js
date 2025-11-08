import {useEffect} from "react";

import DonutChart from "./../components/DonutChart.js";

const PopulationDistribution = () => {
	useEffect(() => {
		document.title = "Population Distribution";
	});
	return (
		<section className="container pt-4">
			<div>
				<DonutChart />
			</div>
		</section>
	);
};

export default PopulationDistribution;
