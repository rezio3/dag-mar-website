import React from "react";

const Opinion1 = (props) => {
	return (
		<div className={props.anim} id="Opinion1">
			<p className="opinion">{props.opinionText}</p>
			<span className="author">{props.opinionAuthor}</span>
		</div>
	);
};

export default Opinion1;
