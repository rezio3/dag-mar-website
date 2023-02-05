import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/css/navbarMobile.css";

const BurgerNavContent = () => {
	return (
		<div className="burger-nav-content">
			<NavLink to="/" end className="m-nav-btn-desktop">
				<button className="m-navbtn">O nas</button>
			</NavLink>
			<NavLink to="/offer" className="m-nav-btn-desktop">
				<button className="m-navbtn">Oferta</button>
			</NavLink>
			<NavLink to="/fortranslators" className="nav-btn-desktop">
				<button className="m-navbtn">Dla tłumaczy</button>
			</NavLink>
			<NavLink to="/faq" className="m-nav-btn-desktop">
				<button className="m-faq m-navbtn">FAQ</button>
			</NavLink>
			<div className="m-language-btn">
				<div className="m-only-btn">
					<span>PL</span>
					<span className="m-material-symbols-outlined">expand_more</span>
				</div>
				<div className="m-language-choice-window">
					<span className="m-eng-span">English</span>
					<span className="m-de-span">Deutsch</span>
				</div>
			</div>
			<NavLink to="/contact" className="m-nav-btn-desktop">
				<button className="m-contact-button">Skontaktuj się</button>
			</NavLink>
		</div>
	);
};

const NavbarMobile = () => {
	const [burgerActive, setBurgerActive] = useState(false);

	const handleBurgerBtn = () => {
		setBurgerActive(!burgerActive);
	};
	return (
		<div className="m-navigation-contaier m-nav-up" id="m-nav">
			<div className="m-logo-img m-logo-up" id="m-logo"></div>
			<div className="burger-icon-container">
				{burgerActive ? (
					// <i class="fa-regular fa-arrow-up fa-3x"></i>
					<i className="fa-regular fa-x fa-2x" onClick={handleBurgerBtn}></i>
				) : (
					<i className="fa-solid fa-bars fa-2x" onClick={handleBurgerBtn} />
				)}
				{burgerActive ? <BurgerNavContent /> : null}
			</div>
		</div>
	);
};

export default NavbarMobile;
