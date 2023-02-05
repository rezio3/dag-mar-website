import React from "react";
import plus from "../../img/plus.svg";

const Question = (props) => {
	return (
		<div
			className={props.state[props.stateLine] ? "line line-active" : "line"}
			id={props.stateLine}
		>
			<div className="visible-line">
				<span className="visible-span-text">{props.header.quest}</span>
				<img
					src={plus}
					className={
						props.state[props.stateLine]
							? "material-symbols-outlined plus rotate"
							: "material-symbols-outlined plus"
					}
					id={props.stateLine}
					onClick={props.handler}
				/>
			</div>
			<div className="unvisible-line">
				<span>{props.header.res}</span>
			</div>
		</div>
	);
};

export default Question;
