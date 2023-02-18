import React from "react";
import { NavLink } from "react-router-dom";
import "../style/css/MenuInBurgerIcon.css";

const MenuInBurgerIcon = (props) => {
	const handleClick = () => {
		props.setBurgerActive(false);
	};
	return (
		<div className="burger-nav-content">
			<div className="buttons-container">
				<NavLink to="/" end className="m-nav-btn-desktop">
					<div className="button-container" onClick={handleClick}>
						<button className="m-navbtn">O nas</button>
					</div>
				</NavLink>
				<NavLink to="/offer" className="m-nav-btn-desktop">
					<div className="button-container" onClick={handleClick}>
						<button className="m-navbtn">Oferta</button>
					</div>
				</NavLink>
				<NavLink to="/fortranslators" className="nav-btn-desktop">
					<div className="button-container" onClick={handleClick}>
						<button className="m-navbtn">Dla tłumaczy</button>
					</div>
				</NavLink>
				<NavLink to="/faq" className="m-nav-btn-desktop">
					<div className="button-container" onClick={handleClick}>
						<button className="m-faq m-navbtn">FAQ</button>
					</div>
				</NavLink>
				{/* <div className="m-language-btn">
				<div className="m-only-btn">
					<span>PL</span>
					<span className="m-material-symbols-outlined">expand_more</span>
				</div>
				<div className="m-language-choice-window">
					<span className="m-eng-span">English</span>
					<span className="m-de-span">Deutsch</span>
				</div>
			</div> */}
				<NavLink to="/contact" className="m-nav-btn-desktop">
					<button className="m-contact-button" onClick={handleClick}>
						Skontaktuj się
					</button>
				</NavLink>
			</div>
		</div>
	);
};

export default MenuInBurgerIcon;
