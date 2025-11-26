import { useEffect } from "react";
import Button from "react-bootstrap/Button";

const Home = () => {
	useEffect(() => {
		document.title = "Home";
	});
	return (
		/* 		<div className="pt-4 container-fluid">
			<div className="">
				<h1 className="">Welcome to the Homepage!</h1>
			</div>
            <Button className="custom-primary" variant="primary">Click me</Button>
		</div> */
<div className="justify-content-center d-flex">
		<div className="grid-container">
			<div className="item large-item">1</div>
			<div className="item small-item">2</div>
			<div className="item small-item">3</div>
			<div className="item small-item">4</div>
		</div>
        </div>
	);
};

export default Home;
