import React from "react";
import { NavLink } from "react-router-dom";
import "../style/css/navbar.css";
import jezyk from "../img/jezyk.png";

const Navbar = () => {
	return (
		<div className="navigation-contaier nav-up" id="nav">
			<div className="left-navbar">
				<NavLink to="/" end className="nav-btn-desktop">
					<button className="navbtn">O nas</button>
				</NavLink>
				<button className="navbtn">Aktualności</button>
				<button className="navbtn">Oferta</button>
			</div>
			<div className="logo-img logo-up" id="logo"></div>
			<div className="right-navbar">
				<button className="language-btn">
					<img src={jezyk} />
				</button>
				<button className="contact-button">Skontaktuj się</button>
			</div>
		</div>
	);
};

export default Navbar;
