import React from "react";

const Opinion2 = (props) => {
	return (
		<div className={`opinion-container ${props.style}`} id="Opinion2">
			<p className="opinion">
				Dylatacja czasu - zjawisko różnic w pomiarze czasu dokonywanym
				równolegle w dwóch różnych układach odniesienia, z których jeden
				przemieszcza się względem drugiego. Pomiar dotyczy czasu trwania tego
				samego zjawiska.
			</p>
			<span className="author">Kłapouchy</span>
		</div>
	);
};

export default Opinion2;
