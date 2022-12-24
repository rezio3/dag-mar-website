import React from "react";
import "../../style/css/values.css";

const Values = () => {
	return (
		<section className="values-we-offer-container" id="section2">
			<h3>Nasze wartości</h3>
			<div className="values-box">
				<div className="value">
					<div className="value-one value-img"></div>
					<span>Rzetelność</span>
				</div>
				<div className="value">
					<div className="value-two value-img"></div>
					<span>Doświadczenie</span>
				</div>
				<div className="value">
					<div className="value-three value-img"></div>
					<span>Profesjonalizm</span>
				</div>
				<div className="value">
					<div className="value-four value-img"></div>
					<span>Terminowość</span>
				</div>
				<div className="value">
					<div className="value-five value-img"></div>
					<span>Partnerstwo</span>
				</div>
			</div>
		</section>
	);
};

export default Values;
