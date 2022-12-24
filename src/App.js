import React from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import ScrollToTop from "./layouts/ScrollToTop";
import Navbar from "./layouts/Navbar";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";
import "./App.css";

function App() {
	return (
		<Router>
			<ScrollToTop>
				<div className="App">
					<Navbar />
					<Page />
					<Footer />
				</div>
			</ScrollToTop>
		</Router>
	);
}

export default App;
