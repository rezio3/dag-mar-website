import React from "react";
import { NavLink } from "react-router-dom";
import "../style/css/forTranslators.css";
import TranslatorsFirstSection from "./translatorsComponents/TranslatorsFirstSection";

const Fortranslators = () => {
	return (
		<div className="for-translators-container">
			<TranslatorsFirstSection />
			<div className="second-section">
				<h2>Czekamy na ciebie</h2>
				<span>
					Lorem ipsum dolor sit amet consectetur. In neque turpis est ultrices
					non fermentum nulla. Habitasse
					<br /> molestie sodales consectetur fermentum at in id blandit
					pharetra. Vel massa pellentesque nunc nullam
					<br /> augue fames sit scelerisque. Vulputate ipsum faucibus viverra
					vitae semper.
				</span>
				<NavLink to="/contact" className="nav-btn-desktop">
					<button className="write-us-btn">Napisz do nas</button>
				</NavLink>
			</div>
		</div>
	);
};

export default Fortranslators;
