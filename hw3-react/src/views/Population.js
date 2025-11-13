import {useEffect} from "react";

import BarChart from "./../components/BarChart.js";

const Population = () => {
    useEffect(() => {
            document.title = 'Population'
        })
	return (
		<section className="container pt-4">
			<div>
				<BarChart />
			</div>
		</section>
	);
};

export default Population;
