import React, { useState } from "react";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import ScrollToTop from "./layouts/ScrollToTop";
import Navbar from "./layouts/Navbar";
import Page from "./layouts/Page";
import Footer from "./layouts/Footer";
import "./App.css";
import News from "./context/NewsContext";
import { HashRouter } from "react-router-dom";
import MenuInBurgerIcon from "./layouts/MenuInBurgerIcon";

function App() {
	const [burgerActive, setBurgerActive] = useState(false);
	return (
		<HashRouter>
			{!burgerActive ? (
				<ScrollToTop>
					<News>
						<div className="App">
							<Navbar
								burgerActive={burgerActive}
								setBurgerActive={setBurgerActive}
							/>
							<Page />
							<Footer />
						</div>
					</News>
				</ScrollToTop>
			) : (
				<MenuInBurgerIcon />
			)}
		</HashRouter>
	);
}

export default App;
