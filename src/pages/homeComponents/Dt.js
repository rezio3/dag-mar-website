import React from "react";
import DTimage from "../../img/DT.png";
import "../../style/css/dt.css";

const Dt = () => {
	return (
		<section className="mgr-Dagmara-Toporowska-container" id="section3">
			<div className="DT-container">
				<div className="DT-img">
					<img src={DTimage} className="DTimage" />
				</div>
				<div className="DT-description">
					<h1>JAK TO SIĘ ZACZĘŁO?</h1>
					<p>
						Działalnością związaną z tłumaczeniami zajmujemy się od roku 2001.
						Początkowo swoją ofertę <br />
						kierowaliśmy do osób, które zainteresowane były wykonaniem tłumaczeń
						z języka angielskiego.
					</p>
					<p>
						Dynamiczny rozwój naszych usług oraz chęć wyjścia naprzeciw
						oczekiwaniom kontrahentów sprawiły, <br />
						że w roku 2005 założyliśmy Biuro Tłumaczeń. Doskonale wiemy jak
						pomóc naszym Klientom, ponieważ <br />
						sami również dokonujemy przekładu. Właścicielką Biura jest tłumacz
						przysięgły języka angielskiego mgr <br />
						Dagmara Toporowska.
					</p>
					<p>
						Dwudziesty pierwszy rok zbierania doświadczeń, tysiące
						zrealizowanych zleceń i projektów gwarantuje <br />
						naszym Klientom w pełni profesjonalne tłumaczenia przysięgłe i
						zwykłe.
					</p>
					<button className="see-offer2">Zobacz ofertę</button>
				</div>
			</div>
		</section>
	);
};

export default Dt;
