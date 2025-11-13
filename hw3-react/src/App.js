/* all app files are based on Caterina Paun's example provided from stackBlitz  https://stackblitz.com/edit/react-ca9yttrr?file=src%2FApp.js */


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";

import Navbar from "./components/Navbar";
import Population from "./views/Population";
import Home from "./views/Home";
import List from "./views/List";
import PopulationDistribution from "./views/PopulationDistribution";

export default function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home title="Home Page" />} />
				<Route path="/population" element={<Population />} />
				<Route path="/list" element={<List />} />
				<Route
					path="/populationdistribution"
					element={<PopulationDistribution />}
				/>
			</Routes>
		</Router>
	);
}
