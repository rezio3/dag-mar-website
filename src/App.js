import React from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import ScrollToTop from "./layouts/ScrollToTop";
import Navbar from "./layouts/Navbar";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";
import "./App.css";
import News from "./context/NewsContext";
import { HashRouter } from "react-router-dom";

function App() {
	return (
		<HashRouter>
			<ScrollToTop>
				<News>
					<div className="App">
						<Navbar />
						<Page />
						<Footer />
					</div>
				</News>
			</ScrollToTop>
		</HashRouter>
	);
}

export default App;
