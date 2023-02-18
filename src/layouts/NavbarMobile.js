import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/css/navbarMobile.css";

const NavbarMobile = (props) => {
	const handleBurgerBtn = () => {
		props.setBurgerActive(!props.burgerActive);
	};
	return (
		<div className="m-navigation-contaier m-nav-up" id="m-nav">
			<div className="m-logo-img m-logo-up" id="m-logo"></div>
			<div className="burger-icon-container">
				{props.burgerActive ? (
					// <i class="fa-regular fa-arrow-up fa-3x"></i>
					<i class="fa-solid fa-bars" onClick={handleBurgerBtn}></i>
				) : (
					<i className="fa-solid fa-bars fa-2x" onClick={handleBurgerBtn} />
				)}
			</div>
		</div>
	);
};

export default NavbarMobile;
