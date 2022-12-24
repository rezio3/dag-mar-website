import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "../../style/css/stats.css";

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

	useEffect(() => {
		const scrollHandler = () => {
			// console(window.scrollY);
			if (scrolled === false && window.scrollY >= 150) {
				setScrolled(true);
				// window.removeEventListener("scroll", scrollHandler);
			} else if (scrolled === true && window.scrollY < 150) {
				setScrolled(false);
			}
		};
		window.addEventListener("scroll", scrollHandler);
	}, [scrolled]);

	return (
		<section className="stats-container" id="section1">
			<div className="first-stat stats">
				<span className="stat-number">{scrolled ? <Number n={26} /> : 0}</span>
				<span className="stat-description">tłumaczonych języków</span>
			</div>
			<div className="second-stat stats">
				<span className="stat-number">{scrolled ? <Number n={21} /> : 0}</span>
				<span className="stat-description">lat doświadczenia</span>
			</div>
			<div className="third-stat stats">
				<span className="stat-number thousand">
					{scrolled ? <Number n={1000} /> : 0}+
				</span>
				<span className="stat-description">zadowolonych klientów</span>
			</div>
			<div className="forth-stat stats">
				<span className="stat-number">{scrolled ? <Number n={16} /> : 0}</span>
				<span className="stat-description">współpracujących partnerów</span>
			</div>
		</section>
	);
};

export default Stats;
