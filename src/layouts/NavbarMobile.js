import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/css/navbarMobile.css";
import burgerIcon from "../img/burger-icon.svg";

const NavbarMobile = (props) => {
	const handleBurgerBtn = () => {
		props.setBurgerActive(!props.burgerActive);
	};
	return (
		<div className="m-navigation-contaier m-nav-up" id="m-nav">
			<div className="m-logo-img m-logo-up" id="m-logo"></div>
			<div className="burger-icon-container">
				{props.burgerActive ? (
					<img src={burgerIcon} onClick={handleBurgerBtn} />
				) : (
					<img src={burgerIcon} onClick={handleBurgerBtn} />
				)}
			</div>
		</div>
	);
};

export default NavbarMobile;
