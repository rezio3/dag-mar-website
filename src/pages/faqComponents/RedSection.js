import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/css/redSection.css";

const RedSection = () => {
	return (
		<div className="red-section-container">
			<h2>Nadal nie uzyskałeś odpowiedzi?</h2>
			<span>
				Lorem ipsum dolor sit amet consectetur. Arcu ultrices ipsum sed a enim
				scelerisque suspendisse et quam. Commodo
				<br /> pharetra vel posuere mauris. Cursus lacus nisi cum morbi quam
				ipsum leo quam augue.{" "}
			</span>
			<NavLink to="/contact" className="nav-btn-desktop">
				<button className="write-us-btn">Napisz do nas</button>
			</NavLink>
		</div>
	);
};

export default RedSection;
