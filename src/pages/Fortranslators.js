import React from "react";
import { NavLink } from "react-router-dom";
import "../style/css/forTranslators.css";
import TranslatorsFirstSection from "./translatorsComponents/TranslatorsFirstSection";
import Media from "react-media";

const Fortranslators = () => {
	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? (
						<div className="for-translators-container">
							<TranslatorsFirstSection />
							<div className="second-section">
								<h2>Czekamy na ciebie</h2>
								<span>
									Jeśli zna Pani/Pan perfekcyjnie jeden lub więcej języków
									obcych, swobodnie posługuje się językiem polskim, ma
									przynajmniej kilkuletnie <br />
									doświadczenie w tłumaczeniu dokumentów, jest osobą
									odpowiedzialną, solidną, dyspozycyjną, pracującą samodzielnie
									lub potrafiącą
									<br /> włączyć się do zespołu i jest zainteresowana/y
									podjęciem współpracy z naszym Biurem zapraszamy do kontaktu.
								</span>
								<NavLink to="/contact" className="nav-btn-desktop">
									<button className="write-us-btn">Napisz do nas</button>
								</NavLink>
							</div>
						</div>
					) : (
						<div className="for-translators-container">
							<TranslatorsFirstSection />
							<div className="second-section">
								<h2>Czekamy na ciebie</h2>
								<span>
									Jeśli zna Pani/Pan perfekcyjnie jeden lub więcej języków
									obcych, swobodnie posługuje się językiem polskim, ma
									przynajmniej kilkuletnie doświadczenie w tłumaczeniu
									dokumentów, jest osobą odpowiedzialną, solidną, dyspozycyjną,
									pracującą samodzielnie lub potrafiącą włączyć się do zespołu i
									jest zainteresowana/y podjęciem współpracy z naszym Biurem
									zapraszamy do kontaktu.
								</span>
								<NavLink to="/contact" className="nav-btn-desktop">
									<button className="write-us-btn">Napisz do nas</button>
								</NavLink>
							</div>
						</div>
					);
				}}
			</Media>
		</>
	);
};

export default Fortranslators;
