import React from "react";
import "../style/css/home.css";
import Stats from "./homeComponents/Stats.js";
import Values from "./homeComponents/Values";
import Dt from "./homeComponents/Dt";
import Opinions from "./homeComponents/Opinions";
import { useScrollTo } from "react-use-window-scroll";
import WhoTrustedUs from "./homeComponents/WhoTrustedUs";

const Home = () => {
	const scrollTo = useScrollTo();
	const scrollDown = () => {
		scrollTo({
			top: 850,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<div className="page-container">
			<div className="header-container">
				<div className="header-span-container">
					<h1>
						Przetłumaczymy <br />
						Twoje potrzeby
					</h1>
					<h3>
						Jeśli szukacie Państwo Tłumacza przysięgłego lub osoby, która <br />
						przełoży tekst z języka ojczystego na język obcy lub odwrotnie
						<br />
						to dobrze trafiliście. W naszym Biurze możecie Państwo zlecić <br />
						tłumaczenie z niemal każdego języka europejskiego i nie tylko.
					</h3>
					<button className="see-offer">Zobacz ofertę</button>
				</div>
				<div className="arrow-down-circle" onClick={scrollDown}>
					<button
						className="material-symbols-outlined arrow-down"
						id="scroll-btn"
					></button>
				</div>
			</div>
			<Stats />
			<Dt />
			<Values />
			<Opinions />
			<WhoTrustedUs />
			<footer className="footer-container">
				<div className="footer-address-container">
					<span>Biuro Tłumaczeń Przysięgłych DAG-MAR</span>
					<span>Karkonoska 1C 59-300 Lubin</span>
				</div>
				<div className="footer-contact-container">
					<span>+48 76 846 10 64 </span>
					<span> +48 607 618 567</span>
					<span>biuro@dag-mar.pl</span>
				</div>
				<div className="footer-social-icons">
					<button className="fb-icon icon-footer-btn"></button>
					<button className="ig-icon icon-footer-btn"></button>
				</div>
			</footer>
			<div className="copyright-container">
				<span>2021 &copy; DAG-MAR</span>
			</div>
		</div>
	);
};

export default Home;

// podnieść podkreślniki
// większa przerwa pod zaufali nam
// wieksza przerwa nad "co mówią o nas klienci"

// pozycjonowanie zeby storna zostala na gorze
// znaleźć legitny serwis mailowy
