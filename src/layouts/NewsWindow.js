import React, { useContext } from "react";
import { NewsContext } from "../context/NewsContext";
import "../style/css/newsWindow.css";

const NewsWindow = () => {
	const [news, setNews] = useContext(NewsContext);
	const handleCloseButton = () => {
		setNews({
			newsOn: false,
		});
	};
	return (
		<div className="news-container">
			<div className="news-x-btn" onClick={handleCloseButton} />
			<h4>Szanowni Klienci,</h4>
			<p>
				informujemy, iż nasze biuro w
				dniaasdjdkjhqwjkehqjkehqkjwheqjdhsfhskjdhqjwehkjqwhekjsdaskdjhjhkjch
				24-31 grudnia będzie nieczynne.
			</p>
			<p>
				Życzymy Wesołych Świąt
				orazwheqwekjqhwejqwjehqwejkqwhekjqhwjkehqwjkehkqjwehjkqwhrjqhrk
				Szczęśliwego Nowego Roku.
			</p>
			<button className="news-ok-btn" onClick={handleCloseButton}>
				Ok byczku
			</button>
		</div>
	);
};

export default NewsWindow;
