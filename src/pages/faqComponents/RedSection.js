import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/css/redSection.css";

const RedSection = () => {
	return (
		<div className="red-section-container">
			<h2>Nadal nie uzyskałeś odpowiedzi?</h2>
			<span>
				Jesteśmy otwarci na Państwa pytania - chętnie rozwiejemy wszelkie
				wątpliwości związane z wykonywaniem tłumaczeńw naszym biurze. Zachęcamy
				do skontaktowania się z nami poprzez formularz kontaktowy, do którego
				prowadzi poniższy przycisk.
			</span>
			<NavLink to="/contact" className="nav-btn-desktop">
				<button className="write-us-btn">Napisz do nas</button>
			</NavLink>
		</div>
	);
};

export default RedSection;
