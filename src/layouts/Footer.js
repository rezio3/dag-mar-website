import React from "react";
import { NavLink } from "react-router-dom";
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
					<NavLink to="/" end className="nav-btn-desktop">
						<span className="footer-link">O nas</span>
					</NavLink>
					<NavLink to="/offer" className="nav-btn-desktop">
						<span className="footer-link">Oferta</span>
					</NavLink>
					<span className="footer-link">Płatności</span>
				</div>
				<div className="aboutUs-offer-FAQ-translators-footer">
					<NavLink to="/fortranslators" className="nav-btn-desktop">
						<span className="footer-link">Dla Tłumaczy</span>
					</NavLink>
					<NavLink to="/faq" className="nav-btn-desktop">
						<span className="footer-link">FAQ</span>
					</NavLink>
				</div>

				<NavLink to="/contact" className="nav-btn-desktop">
					<button className="footer-contact-btn">Skontaktuj się</button>
				</NavLink>
			</div>
			<div className="lower-footer-container">
				<span>Copyright &copy; 2022 DAG-MAR</span>
				<div className="icons-footer-container">
					<img src={fbIcon} alt="Facebook Icon" className="icon" />
					<img src={googleIcon} alt="Google Icon" className="icon" />
				</div>
				<span>Polityka prywatności</span>
			</div>
		</footer>
	);
};

export default Footer;
