import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Media from "react-media";
import "../../style/css/stats.css";

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window.pageYOffset);
		};
		window.addEventListener("scroll", updatePosition);
		updatePosition();
		return () => window.removeEventListener("scroll", updatePosition);
	}, []);

	return scrollPosition;
};

const Number = ({ n }) => {
	const { num } = useSpring({
		from: { num: 0 },
		num: n,
		delay: 100,
		config: { mass: 1, tension: 20, friction: 10 },
	});
	return (
		<animated.div>
			{num.to((n) => n.toFixed(0))}
			{/* <span></span> */}
		</animated.div>
	);
};
const Stats = () => {
	const [scrolled, setScrolled] = useState(false);
	let scrollPosition = useScrollPosition();
	console.log(scrollPosition);
	if (scrolled === false && scrollPosition >= 150) {
		setScrolled(true);
	} else if (scrolled === true && scrollPosition < 150) {
		setScrolled(false);
	}
	// useEffect(() => {
	// const scrollHandler = () => {

	//
	// };
	// scrollPosition.addEventListener("scroll", scrollHandler);
	// }, [scrolled]);

	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? (
						// desktop
						<section className="stats-container" id="section1">
							<div className="first-stat stats">
								<span className="stat-number">
									{scrolled ? <Number n={26} /> : 0}
								</span>
								<span className="stat-description">tłumaczonych języków</span>
							</div>
							<div className="second-stat stats">
								<span className="stat-number">
									{scrolled ? <Number n={21} /> : 0}
								</span>
								<span className="stat-description">lat doświadczenia</span>
							</div>
							<div className="third-stat stats">
								<span className="stat-number thousand">
									{scrolled ? <Number n={1000} /> : 0}+
								</span>
								<span className="stat-description">zadowolonych klientów</span>
							</div>
							<div className="forth-stat stats">
								<span className="stat-number">
									{scrolled ? <Number n={16} /> : 0}
								</span>
								<span className="stat-description">
									współpracujących partnerów
								</span>
							</div>
						</section>
					) : (
						// mobile
						<section className="stats-container" id="section1">
							<div className="first-block-stats block">
								<div className="first-stat stats">
									<span className="stat-number">26</span>
									<span className="stat-description">tłumaczonych języków</span>
								</div>
								<div className="second-stat stats">
									<span className="stat-number">21</span>
									<span className="stat-description">lat doświadczenia</span>
								</div>
							</div>
							<div className="second-block-stats block">
								<div className="third-stat stats">
									<span className="stat-number thousand">1000+</span>
									<span className="stat-description">
										zadowolonych klientów
									</span>
								</div>
								<div className="forth-stat stats">
									<span className="stat-number">16</span>
									<span className="stat-description">
										współpracujących partnerów
									</span>
								</div>
							</div>
						</section>
					);
				}}
			</Media>
		</>
	);
};

export default Stats;
