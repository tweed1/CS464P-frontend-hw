import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	BrowserRouter,
} from "react-router";

import Home from "./Views/Home";
import Search from "./Views/Search";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ZoneMap from "./Views/ZoneMap";
import Zone from "./Views/Zone";
import AppLayout from "./Layouts/AppLayout";
import PlantDetails from "./Views/PlantDetails";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route element={<AppLayout />}>
						<Route index element={<Home />} />
						<Route path="search" element={<Search />} />
						<Route path="zonemap" element={<ZoneMap />} />
						<Route path="zone/:id" element={<Zone />} />
                        <Route path="plantdetails" element={<PlantDetails />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
