import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        document.title = 'Home'
    })
	return (
		<div className="pt-4">
			<div>
				<h1>This is the Home page</h1>
			</div>
		</div>
	);
};

export default Home;
