import React from "react";
import DTimage from "../../img/DT.png";
import Media from "react-media";
import "../../style/css/dt.css";

const Dt = () => {
	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? (
						<section className="mgr-Dagmara-Toporowska-container" id="section3">
							<div className="DT-container">
								<div className="DT-img">
									<img src={DTimage} className="DTimage" />
								</div>
								<div className="DT-description">
									<h1>JAK TO SIĘ ZACZĘŁO?</h1>
									<p>
										Działalnością związaną z tłumaczeniami zajmujemy się od roku
										2001. Początkowo swoją ofertę kierowaliśmy do osób, które
										zainteresowane były wykonaniem tłumaczeń z języka
										angielskiego.
									</p>
									<p>
										Dynamiczny rozwój naszych usług oraz chęć wyjścia naprzeciw
										oczekiwaniom kontrahentów sprawiły, że w roku 2005
										założyliśmy Biuro Tłumaczeń. Doskonale wiemy jak pomóc
										naszym Klientom, ponieważ sami również dokonujemy przekładu.
										Właścicielką Biura jest tłumacz przysięgły języka
										angielskiego mgr Dagmara Toporowska.
									</p>
									<p>
										Dwudziesty pierwszy rok zbierania doświadczeń, tysiące
										zrealizowanych zleceń i projektów gwarantuje naszym Klientom
										w pełni profesjonalne tłumaczenia przysięgłe i zwykłe.
									</p>
									<button className="see-offer2">Zobacz ofertę</button>
								</div>
							</div>
						</section>
					) : (
						<section className="mgr-Dagmara-Toporowska-container" id="section3">
							<div className="DT-container">
								<div className="DT-description">
									<h1>JAK TO SIĘ ZACZĘŁO?</h1>
									<p>
										Działalnością związaną z tłumaczeniami zajmujemy się od roku
										2001. Początkowo swoją ofertę kierowaliśmy do osób, które
										zainteresowane były wykonaniem tłumaczeń z języka
										angielskiego.
									</p>
									<p>
										Dynamiczny rozwój naszych usług oraz chęć wyjścia naprzeciw
										oczekiwaniom kontrahentów sprawiły, że w roku 2005
										założyliśmy Biuro Tłumaczeń. Doskonale wiemy jak pomóc
										naszym Klientom, ponieważ sami również dokonujemy przekładu.
										Właścicielką Biura jest tłumacz przysięgły języka
										angielskiego mgr Dagmara Toporowska.
									</p>
									<p>
										Dwudziesty pierwszy rok zbierania doświadczeń, tysiące
										zrealizowanych zleceń i projektów gwarantuje naszym Klientom
										w pełni profesjonalne tłumaczenia przysięgłe i zwykłe.
									</p>
									<div className="button-and-DT-img">
										<button className="see-offer2">Zobacz ofertę</button>
										<div className="DT-img">
											<img src={DTimage} className="DTimage" />
										</div>
									</div>
								</div>
							</div>
						</section>
					);
				}}
			</Media>
		</>
	);
};

export default Dt;
