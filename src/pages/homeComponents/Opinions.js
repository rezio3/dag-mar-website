import React, { useState } from "react";
import "../../style/css/opinions.css";
import Opinion1 from "./Opinions/Opinion1";
import Opinion2 from "./Opinions/Opinion2";
import Opinion3 from "./Opinions/Opinion3";
import Opinion4 from "./Opinions/Opinion4";
import Opinion5 from "./Opinions/Opinion5";
import Opinion6 from "./Opinions/Opinion6";

const Opinions = () => {
	const opinion1 = <Opinion1 active={true} />;
	const opinion2 = <Opinion2 active={true} />;
	const opinion3 = <Opinion3 active={true} />;
	const opinion4 = <Opinion4 active={false} />;
	const opinion5 = <Opinion5 active={false} />;
	const opinion6 = <Opinion6 active={false} />;

	const [opinion, setOpinion] = useState({
		activeOpinions: [opinion4, opinion5, opinion6],
		allOpinions: [opinion1, opinion2, opinion3, opinion4, opinion5, opinion6],
		arrayOfActiveOpinions: [4, 5, 6],
		rightArrowOn: true,
		leftArrowOn: true,
	});

	const handleRightArrayPushing = (tempArr) => {
		const newOpinionArray = [];
		newOpinionArray.push(
			tempArr.map((e) => {
				e -= 1;
				return opinion.allOpinions[e];
			})
		);
		// console.log(newOpinionArray);
		const rightCarouselAnimation = document.getElementById(
			"opinions-description2"
		);

		rightCarouselAnimation.classList.add("right-animation");
		setOpinion({
			...opinion,
			rightArrowOn: false,
			leftArrowOn: false,
		});
		setTimeout(() => {
			rightCarouselAnimation.classList.remove("right-animation");
			setOpinion({
				...opinion,
				activeOpinions: newOpinionArray,
				arrayOfActiveOpinions: tempArr,
				rightArrowOn: true,
				leftArrowOn: true,
			});
		}, 560);
	};

	const handleLeftArrayPushing = (tempArr) => {
		// console.log(tempArr);
		const newOpinionArray = [];
		newOpinionArray.push(
			tempArr.map((e) => {
				e -= 1;
				return opinion.allOpinions[e];
			})
		);
		// console.log(newOpinionArray);
		const rightCarouselAnimation = document.getElementById(
			"opinions-description2"
		);

		rightCarouselAnimation.classList.add("left-animation");
		setOpinion({
			...opinion,
			rightArrowOn: false,
			leftArrowOn: false,
		});
		setTimeout(() => {
			rightCarouselAnimation.classList.remove("left-animation");
			setOpinion({
				...opinion,
				activeOpinions: newOpinionArray,
				arrayOfActiveOpinions: tempArr,
				rightArrowOn: true,
				leftArrowOn: true,
			});
		}, 560);
	};

	const handleLeftArrow = () => {
		const { arrayOfActiveOpinions } = opinion;
		const tempArr = arrayOfActiveOpinions;
		const firstElememnt = tempArr[0];
		tempArr.pop();

		if (firstElememnt === 1) {
			tempArr.unshift(6);
			handleLeftArrayPushing(tempArr);
		} else if (firstElememnt === 6) {
			tempArr.unshift(5);
			handleLeftArrayPushing(tempArr);
		} else if (firstElememnt === 5) {
			tempArr.unshift(4);
			handleLeftArrayPushing(tempArr);
		} else {
			tempArr.unshift(firstElememnt - 1);
			handleLeftArrayPushing(tempArr);
		}
	};

	const handleRightArrow = () => {
		const { arrayOfActiveOpinions } = opinion;
		const tempArr = arrayOfActiveOpinions;
		const lastElememnt = tempArr.slice(-1);
		tempArr.shift();
		// console.log(lastElememnt[0]);
		if (lastElememnt[0] === 6) {
			tempArr.push(1);
			handleRightArrayPushing(tempArr);
		} else if (lastElememnt[0] === 1) {
			tempArr.push(2);
			handleRightArrayPushing(tempArr);
		} else if (lastElememnt[0] === 2) {
			tempArr.push(3);
			handleRightArrayPushing(tempArr);
		} else {
			tempArr.push(lastElememnt[0] + 1);
			handleRightArrayPushing(tempArr);
		}
	};

	return (
		<div className="opinions-container-0">
			<div className="opinions-container">
				<h1 className="opinions-header">Co mówią o nas klienci</h1>
				<div className="carousel-container">
					<div
						className="carousel-left-arrow carousel-arrow"
						onClick={opinion.leftArrowOn ? handleLeftArrow : null}
						// style={{ opacity: opinion.activeOpinion === 1 ? "0" : "0.3" }}
					>
						<button
							className="material-symbols-outlined left-arrow arrow"
							id="scroll-btn"
						></button>
					</div>
					<div className="opinions-description" id="opinions-description">
						<div className="opinions-description2" id="opinions-description2">
							{opinion.activeOpinions.map((e) => {
								return e;
							})}
						</div>
					</div>
					<div
						className="carousel-right-arrow carousel-arrow"
						onClick={opinion.rightArrowOn ? handleRightArrow : null}
						// style={{ opacity: opinion.activeOpinion === 3 ? "0" : "0.3" }}
					>
						<button
							className="material-symbols-outlined right-arrow arrow"
							id="scroll-btn"
						></button>
					</div>
				</div>
				<div className="segments-container">
					<div
						className="carousel-segment"
						style={{ opacity: opinion.activeOpinion === 1 ? "1" : "0.3" }}
					/>
					<div
						className="carousel-segment"
						style={{ opacity: opinion.activeOpinion === 2 ? "1" : "0.3" }}
					/>
					<div
						className="carousel-segment"
						style={{ opacity: opinion.activeOpinion === 3 ? "1" : "0.3" }}
					/>
				</div>
			</div>
		</div>
	);
};

export default Opinions;
