import React, { useState } from "react";
import "../../style/css/opinions.css";
import Opinion from "./Opinions/Opinion";
import OpinionSegments from "./Opinions/opinionSegment";

const Opinions = () => {
	const opinionsData = [
		{
			opinionText: `Podstawowy i najprostszy przepis na szarlotkę na kruchym cieście. To
		bardzo szybka do
		 zrobienia szarlotka, którą polecam każdemu. Poradzą z nią sobie
		nawet osoby, które
		 rzadziej pieką i gotują. Jest pyszna!`,
			author: `Zbyszko z Bogdańca`,
		},
		{
			opinionText: `Dylatacja czasu - zjawisko różnic w pomiarze czasu dokonywanym
			równolegle w dwóch
			 różnych układach odniesienia, z których jeden przemieszcza się
			względem drugiego.
			 Pomiar dotyczy czasu trwania tego samego zjawiska.`,
			author: `Kłapouchy`,
		},
		{
			opinionText: `Żaden dzień się nie powtórzy, nie ma dwóch podobnych nocy, dwóch tych
			samych
			 pocałunków, dwóch jednakich spojrzeń w oczy.`,
			author: `Szostakowicz/Szymborska`,
		},
		{
			opinionText: `Monster High - amerykańska linia lalek stworzona przez Garrett Sander z
			ilustracjami
			 wykonanymi przez Kellee Riley.`,
			author: `Prezydent Duda`,
		},
		{
			opinionText: `Nasze poznańskie złomowisko przyjmuje metale i surowce wtórne zarówno od
			klientów
			 indywidualnych, jak i firm. Bez względu na to, czy jesteś osobą
			prywatną`,
			author: `Piotrek`,
		},
		{
			opinionText: `	First things first I'ma say all the words inside my head I'm fired up
			and tired of the way that
			 things have been, oh-ooh The way that things have been`,
			author: `Lord Sith`,
		},
	];

	const [opinion, setOpinion] = useState({
		activeOpinion: [0],
		currentView: 1,
		rightArrowOn: true,
		leftArrowOn: true,
		whichArrow: 1,
	});

	const handleLeftArrow = () => {
		const nextOpinionArrPush =
			opinion.activeOpinion[0] !== 0 ? opinion.activeOpinion[0] - 1 : 5;
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
			whichArrow: 0,
		});

		setTimeout(() => {
			if (opinion.activeOpinion[1] === 0) {
				setOpinion({
					...opinion,
					activeOpinion: [5],
					leftArrowOn: true,
					currentView: tempCurrentView,
					whichArrow: 0,
				});
			} else {
				setOpinion({
					...opinion,
					activeOpinion: [nextOpinionArrPush],
					leftArrowOn: true,
					currentView: tempCurrentView,
					whichArrow: 0,
				});
			}
		}, 600);
	};

	const handleRightArrow = () => {
		console.log("click");
		const nextOpinionArrPush =
			opinion.activeOpinion[0] !== 5 ? opinion.activeOpinion[0] + 1 : 0;
		console.log(nextOpinionArrPush);

		const newArr = opinion.activeOpinion;
		newArr.push(nextOpinionArrPush);
		console.log(newArr);
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
			whichArrow: 1,
		});

		setTimeout(() => {
			if (opinion.activeOpinion[0] === 6) {
				setOpinion({
					...opinion,
					activeOpinion: [1],
					rightArrowOn: true,
					currentView: tempCurrentView,
					whichArrow: 1,
				});
			} else {
				setOpinion({
					...opinion,
					activeOpinion: [nextOpinionArrPush],
					rightArrowOn: true,
					currentView: tempCurrentView,
					whichArrow: 1,
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
					>
						<button
							className="material-symbols-outlined left-arrow arrow"
							id="scroll-btn"
						></button>
					</div>
					<div className="opinions-description" id="opinions-description">
						<div className="opinions-description2" id="opinions-description2">
							{opinion.activeOpinion.map((e, index) => {
								console.log(index);
								return (
									<Opinion
										opinionText={opinionsData[e].opinionText}
										opinionAuthor={opinionsData[e].author}
										key={e}
										anim={(() => {
											if (opinion.whichArrow === 1) {
												if (opinion.activeOpinion.length === 2) {
													if (index === 0) {
														return "opinion-container swipe-to-left";
													} else {
														return "opinion-container swipe-from-right";
													}
												} else if (opinion.activeOpinion.length === 1) {
													return "opinion-container swipe-from-right";
												}
											} else {
												if (opinion.activeOpinion.length === 2) {
													if (index === 0) {
														return "opinion-container swipe-from-left";
													} else {
														return "opinion-container swipe-to-right";
													}
												} else if (opinion.activeOpinion.length === 1) {
													return "opinion-container swipe-from-left";
												}
											}
										})()}
									/>
								);
							})}
						</div>
					</div>
					<div
						className="carousel-right-arrow carousel-arrow"
						onClick={opinion.rightArrowOn ? handleRightArrow : null}
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
