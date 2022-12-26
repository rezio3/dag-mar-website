import React, { useContext } from "react";
import "../style/css/home.css";
import Stats from "./homeComponents/Stats.js";
import Values from "./homeComponents/Values";
import Dt from "./homeComponents/Dt";
import Opinions from "./homeComponents/Opinions";
import { useScrollTo } from "react-use-window-scroll";
import WhoTrustedUs from "./homeComponents/WhoTrustedUs";
import CookiesWindow from "../layouts/CookiesWindow";
import { CookiesContext } from "../context/CookiesContext";

const Home = () => {
	const [cookies, setCookies] = useContext(CookiesContext);
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
			{cookies.cookiesOn ? <CookiesWindow /> : null};
		</div>
	);
};

export default Home;

// podnieść podkreślniki
// większa przerwa pod zaufali nam
// wieksza przerwa nad "co mówią o nas klienci"

// pozycjonowanie zeby storna zostala na gorze
// znaleźć legitny serwis mailowy
