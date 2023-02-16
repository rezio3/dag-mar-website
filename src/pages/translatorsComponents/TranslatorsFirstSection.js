import React from "react";

const TranslatorsFirstSection = () => {
	console.log(document.URL);
	return (
		<div className="translators-first-section">
			<div className="translators-text">
				<div className="translators-header-container">
					<h3>Dla tłumaczy</h3>
					<h2>Chętnie nawiążemy współpracę</h2>
				</div>
				<p className="translators-txt">
					Biuro Tłumaczeń Przysięgłych „DAG-MAR” skupia wokół siebie zespół
					Tłumaczy <br />z wieloletnim doświadczeniem. Wobec stale rosnących
					wymagań i oczekiwań naszych Klientów decydujemy się na współpracę
					tylko z prawdziwymi profesjonalistami w swojej branży.
				</p>
				<p className="translators-txt">
					Zapewniamy materiały do tłumaczenia, uczciwe stawki za wykonaną pracę,
					rozliczenia na czas, a także rekomendacje i polecenie innym
					pracodawcom <br />w przyszłości.
				</p>
			</div>
			<div className="translators-arc-img">
				<div className="translators-img" />
			</div>
		</div>
	);
};

export default TranslatorsFirstSection;
