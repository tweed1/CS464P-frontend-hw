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

const App = () => {
	return (
		<main className="custom-main-bg">
			<Router>
				<NavBar />
				<Routes>
					<Route index element={<Home />} />
					<Route path="search" element={<Search />} />
				</Routes>
			</Router>
		</main>
	);
};

export default App;
