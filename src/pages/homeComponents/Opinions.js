import React, { useState } from "react";
import "../../style/css/opinions.css";
import Opinion1 from "./Opinions/Opinion1";
import Opinion2 from "./Opinions/Opinion2";
import Opinion3 from "./Opinions/Opinion3";
import Opinion4 from "./Opinions/Opinion4";
import Opinion5 from "./Opinions/Opinion5";
import Opinion6 from "./Opinions/Opinion6";
import OpinionSegments from "./Opinions/opinionSegment";

const Opinions = () => {
	let opinionsContainer = {
		opinion1: true,
		opinion2: false,
		opinion3: false,
		opinion4: false,
		opinion5: false,
		opinion6: false,
	};
	const opinion1 = <Opinion1 key="op1" style={"kupa"} />;
	const opinion2 = <Opinion2 key="op2" style={"kupa"} />;
	const opinion3 = <Opinion3 key="op3" style={"kupa"} />;
	const opinion4 = <Opinion4 key="op4" style={"kupa"} />;
	const opinion5 = <Opinion5 key="op5" style={"kupa"} />;
	const opinion6 = <Opinion6 key="op6" style={"kupa"} />;

	const [opinion, setOpinion] = useState({
		activeOpinion: [0],
		currentView: 1,
		allOpinions: [opinion1, opinion2, opinion3, opinion4, opinion5, opinion6],
		rightArrowOn: true,
		leftArrowOn: true,
	});

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
		let tempCurrentView = null;
		if (opinion.currentView === 1) {
			tempCurrentView = 6;
		} else {
			tempCurrentView = opinion.currentView - 1;
		}

		console.log("current-view " + tempCurrentView);

		setOpinion({
			...opinion,
			activeOpinion: newArr,
			leftArrowOn: false,
			currentView: tempCurrentView,
		});
		setTimeout(() => {
			const swipeOutOpinion = document.getElementById(
				`${opinion.allOpinions[[opinion.activeOpinion[1]]].type.name}`
			);
			console.log(nextOpinionArrPush);
			swipeOutOpinion.classList.add("swipe-to-right");
			const swipeInOpinion = document.getElementById(
				`${opinion.allOpinions[nextOpinionArrPush].type.name}`
			);
			swipeInOpinion.classList.add("swipe-from-left");
		}, 1);

		setTimeout(() => {
			const swipeInOpinion = document.getElementById(
				`${opinion.allOpinions[nextOpinionArrPush].type.name}`
			);
			swipeInOpinion.classList.remove("swipe-from-left");
			if (opinion.activeOpinion[1] === 0) {
				setOpinion({
					...opinion,
					activeOpinion: [5],
					leftArrowOn: true,
					currentView: tempCurrentView,
				});
			} else {
				setOpinion({
					...opinion,
					activeOpinion: [nextOpinionArrPush],
					leftArrowOn: true,
					currentView: tempCurrentView,
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
		let tempCurrentView = null;
		if (opinion.currentView === 6) {
			tempCurrentView = 1;
		} else {
			tempCurrentView = opinion.currentView + 1;
		}
		console.log("current-view " + tempCurrentView);

		setOpinion({
			...opinion,
			activeOpinion: newArr,
			rightArrowOn: false,
			currentView: tempCurrentView,
		});

		setTimeout(() => {
			const swipeInOpinion = document.getElementById(
				`${opinion.allOpinions[nextOpinionArrPush].type.name}`
			);
			swipeInOpinion.classList.add("swipe-from-right");
		}, 1);

		setTimeout(() => {
			if (opinion.activeOpinion[0] === 6) {
				setOpinion({
					...opinion,
					activeOpinion: [1],
					rightArrowOn: true,
					currentView: tempCurrentView,
				});
				const swipeInOpinion = document.getElementById(
					`${opinion.allOpinions[nextOpinionArrPush].type.name}`
				);
				swipeInOpinion.classList.remove("swipe-from-right");
			} else {
				setOpinion({
					...opinion,
					activeOpinion: [nextOpinionArrPush],
					rightArrowOn: true,
					currentView: tempCurrentView,
				});
				const swipeInOpinion = document.getElementById(
					`${opinion.allOpinions[nextOpinionArrPush].type.name}`
				);
				swipeInOpinion.classList.remove("swipe-from-right");
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
					<OpinionSegments
						style={{
							backgroundColor: opinion.currentView === 1 ? "#6c6c6c" : null,
						}}
					/>
					<OpinionSegments
						style={{
							backgroundColor: opinion.currentView === 2 ? "#6c6c6c" : null,
						}}
					/>
					<OpinionSegments
						style={{
							backgroundColor: opinion.currentView === 3 ? "#6c6c6c" : null,
						}}
					/>
					<OpinionSegments
						style={{
							backgroundColor: opinion.currentView === 4 ? "#6c6c6c" : null,
						}}
					/>
					<OpinionSegments
						style={{
							backgroundColor: opinion.currentView === 5 ? "#6c6c6c" : null,
						}}
					/>
					<OpinionSegments
						style={{
							backgroundColor: opinion.currentView === 6 ? "#6c6c6c" : null,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Opinions;
