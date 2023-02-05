import React, { useState } from "react";
import "../../style/css/payments.css";
import plus from "../../img/plus.svg";

const Payments = () => {
	const [paymentsView, setPaymentsView] = useState({
		line1Active: false,
		line2Active: false,
		line3Active: false,
	});

	const handlePlusClick = (e) => {
		const lineClicked = e.target.id;
		setPaymentsView({
			...paymentsView,
			[lineClicked]: !paymentsView[lineClicked],
		});
	};

	const { line1Active, line2Active, line3Active } = paymentsView;

	return (
		<div className="payments-container">
			<h2>Płatności</h2>
			<div
				className={
					line1Active
						? "line1 linePayments linePayments-active"
						: "line1 linePayments"
				}
			>
				<div className="visible-line">
					<span className="visible-span-text">
						Dane do przelewu: Biuro Tłumaczeń DAG-MAR Dagmara Toporowska
					</span>
					<img
						src={plus}
						className={
							line1Active
								? "material-symbols-outlined plus rotate"
								: "material-symbols-outlined plus"
						}
						id="line1Active"
						onClick={handlePlusClick}
					/>
				</div>
				<div className="unvisible-line">
					<p>
						Kod BIC/SWIFT mBanku: BREXPLPWMBK
						<br /> mBank S.A. FORMERLY BRE BANK S.A. (RETAIL BANKING) LODZ
					</p>
					<p>
						Skrytka pocztowa 2108
						<br /> 90-959 Łódź 2
					</p>
				</div>
			</div>
			<div
				className={
					line2Active
						? "line2 linePayments linePayments-active"
						: "line2 linePayments"
				}
			>
				<div className="visible-line">
					<span className="visible-span-text">
						Dane do przelewu: Biuro Tłumaczeń DAG-MAR sp. z o.o.
					</span>
					<img
						src={plus}
						className={
							line2Active
								? "material-symbols-outlined plus rotate"
								: "material-symbols-outlined plus"
						}
						id="line2Active"
						onClick={handlePlusClick}
					/>
				</div>
				<div className="unvisible-line">
					<p>
						Kod BIC/SWIFT mBanku: BREXPLPWMBK
						<br /> mBank S.A. FORMERLY BRE BANK S.A. (RETAIL BANKING) LODZ
					</p>
					<p>
						Skrytka pocztowa 2108
						<br /> 90-959 Łódź 2
					</p>
				</div>
			</div>
			<div
				className={
					line3Active
						? "line3 linePayments linePayments-active"
						: "line3 linePayments"
				}
			>
				<div className="visible-line">
					<span className="visible-span-text">
						Dodatkowe dane do przelewu zagranicznego
					</span>
					<img
						src={plus}
						className={
							line3Active
								? "material-symbols-outlined plus rotate"
								: "material-symbols-outlined plus"
						}
						id="line3Active"
						onClick={handlePlusClick}
					/>
				</div>
				<div className="unvisible-line">
					<p>
						Kod BIC/SWIFT mBanku: BREXPLPWMBK
						<br /> mBank S.A. FORMERLY BRE BANK S.A. (RETAIL BANKING) LODZ
					</p>
					<p>
						Skrytka pocztowa 2108
						<br /> 90-959 Łódź 2
					</p>
				</div>
			</div>
		</div>
	);
};

export default Payments;
