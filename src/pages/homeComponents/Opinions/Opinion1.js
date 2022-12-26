import React from "react";

const Opinion1 = (props) => {
	return (
		<div className={`opinion-container ${props.style}`} id="Opinion1">
			<p className="opinion">
				Podstawowy i najprostszy przepis na szarlotkę na kruchym cieście. To
				bardzo szybka do zrobienia szarlotka, którą polecam każdemu. Poradzą z
				nią sobie nawet osoby, które rzadziej pieką i gotują. Jest pyszna!
			</p>
			<span className="author">Zbyszko z Bogdańca</span>
		</div>
	);
};

export default Opinion1;
