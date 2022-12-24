import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Page = () => {
	window.onscroll = () => {
		const myNav = document.getElementById("nav");
		const logo = document.getElementById("logo");
		if (window.scrollY > 100) {
			myNav.classList.add("nav-scrolled");
			myNav.classList.remove("nav-up");
			logo.classList.add("logo-scrolled");
			logo.classList.remove("logo-up");
		} else {
			myNav.classList.add("nav-up");
			myNav.classList.remove("nav-scrolled");
			logo.classList.add("logo-up");
			logo.classList.remove("logo-scrolled");
		}
	};

	return (
		<div className="page-container">
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/music" element={<Music />} />
				<Route path="/offer" element={<Offer />} />
				<Route path="/contact" element={<Contact />} /> */}
			</Routes>
		</div>
	);
};

export default Page;
