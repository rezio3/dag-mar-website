import React from "react";
import "../style/css/footer.css";
import footerLogo from "../img/footer-logo.png";
import fbIcon from "../img/FacebookIcon.png";
import googleIcon from "../img/GoogleIcon.png";

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="upper-footer-container">
				<img src={footerLogo} alt="dag-mar logo" className="footer-logo" />
				<div className="footer-address">
					<h2>Biuro Tłumaczeń Przysięgłych DAG-MAR</h2>
					<span className="footer-contact-number">+48 607 618 567</span>
					<span>Karkonoska 1C, 59-300 Lubin</span>
				</div>
				<div className="aboutUs-offer-FAQ-translators-footer aboutUs-footer">
					<span>O nas</span>
					<span>Oferta</span>
					<span>Płatności</span>
				</div>
				<div className="aboutUs-offer-FAQ-translators-footer">
					<span>Dla Tłumaczy</span>
					<span>FAQ</span>
				</div>
				<button className="footer-contact-btn">Skontaktuj się</button>
			</div>
			<div className="lower-footer-container">
				<span>Copyright &copy; 2022 DAG-MAR</span>
				<div className="icons-footer-container">
					<img src={fbIcon} alt="Facebook Icon" />
					<img src={googleIcon} alt="Google Icon" />
				</div>
				<span>Polityka prywatności</span>
			</div>
		</footer>
	);
};

export default Footer;
