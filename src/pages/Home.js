import React, { useContext } from "react";
import "../style/css/home.css";
import Stats from "./homeComponents/Stats.js";
import Values from "./homeComponents/Values";
import Dt from "./homeComponents/Dt";
import Opinions from "./homeComponents/Opinions";
import { useScrollTo } from "react-use-window-scroll";
import WhoTrustedUs from "./homeComponents/WhoTrustedUs";
import { NewsContext } from "../context/NewsContext";
import NewsWindow from "../layouts/NewsWindow";

const Home = () => {
	const [news, setNews] = useContext(NewsContext);
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
			{news.newsOn ? <NewsWindow /> : null}
			<div className="header-container">
				<div className="header-span-container">
					<h1>
						Przetłumaczymy <br />
						Twoje potrzeby
					</h1>
					<h3>
						Jeśli szukacie Państwo Tłumacza przysięgłego lub osoby, która
						przełoży tekst z języka ojczystego na język obcy lub odwrotnie to
						dobrze trafiliście. W naszym Biurze możecie Państwo zlecić
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
			<div className="test"></div>
			<WhoTrustedUs />
		</div>
	);
};

export default Home;

// pozycjonowanie zeby storna zostala na gorze
// znaleźć legitny serwis mailowy
