import React, { useContext } from "react";
import { CookiesContext } from "../context/CookiesContext";
import "../style/css/cookiesWindow.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CookiesWindow = () => {
	const [cookies, setCookies] = useContext(CookiesContext);
	const handleAcceptButton = () => {
		setCookies({
			cookiesOn: false,
		});
	};
	return (
		<div className="cookies-container">
			<div className="cookies-window">
				{/* <div className="cookies-note-container"> */}
				<p className="cookies-note">
					Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym
					poziomie oraz do personalizacji reklam. Dalsze korzystanie ze strony
					oznacza, że zgadzasz się na ich użycie.
				</p>
				{/* </div> */}
				<button className="accept-cookies-btn" onClick={handleAcceptButton}>
					Akceptuję
				</button>
				<span class="material-symbols-outlined" onClick={handleAcceptButton}>
					close
				</span>
				{/* <FontAwesomeIcon icon="fa-regular fa-xmark-large" /> */}
			</div>
		</div>
	);
};

export default CookiesWindow;
