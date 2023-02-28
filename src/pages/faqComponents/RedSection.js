import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/css/redSection.css";
import Media from "react-media";

const RedSection = () => {
	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? (
						<div className="red-section-container">
							<h2>Nadal nie uzyskałeś odpowiedzi?</h2>
							<span>
								Jesteśmy otwarci na Państwa pytania - chętnie rozwiejemy
								wszelkie wątpliwości związane z wykonywaniem tłumaczeń <br />w
								naszym biurze. Zachęcamy do skontaktowania się z nami poprzez
								formularz kontaktowy, do którego prowadzi poniższy przycisk.
							</span>
							<NavLink to="/contact" className="nav-btn-desktop">
								<button className="write-us-btn">Napisz do nas</button>
							</NavLink>
						</div>
					) : (
						<div className="red-section-container">
							<h2>Nadal nie uzyskałeś odpowiedzi?</h2>
							<span>
								Jesteśmy otwarci na Państwa pytania - chętnie rozwiejemy
								wszelkie wątpliwości związane z wykonywaniem tłumaczeńw naszym
								biurze. Zachęcamy do skontaktowania się z nami poprzez formularz
								kontaktowy, do którego prowadzi poniższy przycisk.
							</span>
							<NavLink to="/contact" className="nav-btn-desktop">
								<button className="write-us-btn">Napisz do nas</button>
							</NavLink>
						</div>
					);
				}}
			</Media>
		</>
	);
};

export default RedSection;
