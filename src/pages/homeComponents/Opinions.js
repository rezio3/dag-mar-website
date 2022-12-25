import React, { useState } from "react";
import "../../style/css/opinions.css";
import Opinion1 from "./Opinions/Opinion1";
import Opinion2 from "./Opinions/Opinion2";
import Opinion3 from "./Opinions/Opinion3";
import Opinion4 from "./Opinions/Opinion4";
import Opinion5 from "./Opinions/Opinion5";
import Opinion6 from "./Opinions/Opinion6";

const Opinions = () => {
	let opinionsContainer = {
		opinion1: true,
		opinion2: false,
		opinion3: false,
		opinion4: false,
		opinion5: false,
		opinion6: false,
	};
	const opinion1 = <Opinion1 />;
	const opinion2 = <Opinion2 />;
	const opinion3 = <Opinion3 />;
	const opinion4 = <Opinion4 />;
	const opinion5 = <Opinion5 />;
	const opinion6 = <Opinion6 />;

	const [opinion, setOpinion] = useState({
		activeOpinion: [0],
		allOpinions: [opinion1, opinion2, opinion3, opinion4, opinion5, opinion6],
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
		// console.log(opinion.allOpinions[opinion.activeOpinion].type.name);
		// const nextOpinionArrPush = 0;
		// if (opinion.activeOpinion[0] === 6) {
		// 	nextOpinionArrPush = 6;
		// } else {
		const nextOpinionArrPush =
			opinion.activeOpinion[0] !== 0 ? opinion.activeOpinion[0] - 1 : 5;
		// console.log(nextOpinionArrPush);
		// }
		const newArr = opinion.activeOpinion;
		newArr.unshift(nextOpinionArrPush);
		console.log(newArr);

		setOpinion({
			...opinion,
			activeOpinion: newArr,
			leftArrowOn: false,
		});
		setTimeout(() => {
			const swipeOutOpinion = document.getElementById(
				`${opinion.allOpinions[[opinion.activeOpinion[1]]].type.name}`
			);
			console.log(nextOpinionArrPush);
			swipeOutOpinion.classList.add("swipe-to-right");
			const swipeInOpinion = document.getElementById(
				`${opinion.allOpinions[[nextOpinionArrPush]].type.name}`
			);
			swipeInOpinion.classList.add("swipe-from-left");
		}, 1);

		setTimeout(() => {
			const swipeInOpinion = document.getElementById(
				`${opinion.allOpinions[[nextOpinionArrPush]].type.name}`
			);
			swipeInOpinion.classList.remove("swipe-from-left");
			if (opinion.activeOpinion[1] === 0) {
				setOpinion({
					...opinion,
					activeOpinion: [5],
					leftArrowOn: true,
				});
			} else {
				setOpinion({
					...opinion,
					activeOpinion: [nextOpinionArrPush],
					leftArrowOn: true,
				});
			}
		}, 600);
	};

	const handleRightArrow = () => {
		// console.log(opinion.allOpinions[opinion.activeOpinion].type.name);
		const swipeOutOpinion = document.getElementById(
			`${opinion.allOpinions[opinion.activeOpinion].type.name}`
		);

		swipeOutOpinion.classList.add("swipe-to-left");
		console.log(swipeOutOpinion);

		// const nextOpinionArrPush = 0;
		// if (opinion.activeOpinion[0] === 6) {
		// 	nextOpinionArrPush = 6;
		// } else {
		const nextOpinionArrPush =
			opinion.activeOpinion[0] !== 5 ? opinion.activeOpinion[0] + 1 : 0;
		console.log(nextOpinionArrPush);
		// }

		const newArr = opinion.activeOpinion;
		newArr.push(nextOpinionArrPush);

		setOpinion({
			...opinion,
			activeOpinion: newArr,
			rightArrowOn: false,
		});

		setTimeout(() => {
			const swipeInOpinion = document.getElementById(
				`${opinion.allOpinions[[nextOpinionArrPush]].type.name}`
			);
			swipeInOpinion.classList.add("swipe-from-right");
		}, 1);

		setTimeout(() => {
			if (opinion.activeOpinion[0] === 6) {
				setOpinion({
					...opinion,
					activeOpinion: [1],
					rightArrowOn: true,
				});
			} else {
				setOpinion({
					...opinion,
					activeOpinion: [nextOpinionArrPush],
					rightArrowOn: true,
				});
			}
		}, 600);
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
							{opinion.activeOpinion.map((e) => {
								return opinion.allOpinions[e];
							})}
							{/* {opinion.allOpinions[opinion.activeOpinion]}; */}
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
