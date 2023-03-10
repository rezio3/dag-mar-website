import React, { useState } from "react";
import "../../style/css/form.css";
import Media from "react-media";
import FormDesktop from "./FormDesktop";

const Form = () => {
	const [fileName, setFileName] = useState(false);
	const [formVal, setFormVal] = useState({
		name: "",
		surname: "",
		email: "",
		topic: "",
		message: "",
		formValid: 0,
		formSent: false,
	});

	const handleInput = (e) => {
		setFormVal({
			...formVal,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, surname, email, topic, message } = formVal;
		console.log(name !== "");
		if (
			name !== "" &&
			surname !== "" &&
			email !== "" &&
			topic !== "" &&
			message !== ""
		) {
			setFormVal({
				name: "",
				surname: "",
				email: "",
				topic: "",
				message: "",
				formValid: 0,
				formSent: true,
			});

			setFileName(false);

			setTimeout(() => {
				setFormVal({
					name: "",
					surname: "",
					email: "",
					topic: "",
					message: "",
					formValid: 0,
					formSent: false,
				});
			}, 1000);
			return true;
		} else {
			console.log("Brak wypełnionych pól w formularzu");
			setFormVal({
				...formVal,
				formValid: 1,
			});
			return false;
		}
	};

	const handleFileUpload = () => {
		setFileName(true);
	};
	return (
		<>
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? (
						<FormDesktop
							handleInput={handleInput}
							handleSubmit={handleSubmit}
							formVal={formVal}
							setFormVal={setFormVal}
							fileName={fileName}
							setFileName={setFileName}
							handleFileUpload={handleFileUpload}
						/>
					) : (
						<div className="m-form-section-container">
							<div className="m-contact-with-us-text-container">
								<div className="m-contact-with-us-text">
									<h2>
										Skontaktuj się <br /> z nami
									</h2>
								</div>
								<span className="m-contact-with-us-bottomtext">
									Lorem ipsum dolor sit amet consectetur. In adipiscing sed
									auctor est condimentum pellentesque mauris consequat quis.
									Sollicitudin lacus nibh metus pellentesque congue tempor risus
									rhoncus.{" "}
								</span>
							</div>
							<div className="m-form-container">
								<form className="m-contact-form" onSubmit={handleSubmit}>
									<div className="m-input-container">
										<input
											name="name"
											type="name"
											placeholder="Imię*"
											className="-m-name-input m-contact-input"
											onChange={handleInput}
											value={formVal.name}
										/>
										<input
											name="surname"
											type="surname"
											placeholder="Nazwisko*"
											className="m-surname-input m-contact-input"
											onChange={handleInput}
											value={formVal.surname}
										/>

										<input
											name="email"
											type="email"
											placeholder="Adres e-mail*"
											className="m-email-input m-contact-input"
											onChange={handleInput}
											value={formVal.email}
										/>
										<input
											name="topic"
											type="topic"
											placeholder="Temat wiadomości*"
											className="m-theme-input m-contact-input"
											onChange={handleInput}
											value={formVal.topic}
										/>
										<textarea
											name="message"
											type="message"
											placeholder="Treść wiadomości*"
											className="m-contact-msg m-contact-input"
											onChange={handleInput}
											value={formVal.message}
										/>
									</div>

									<div className="m-policy-and-sender-container">
										<span className="m-pole">*Pole obowiązkowe</span>
										<div className="m-upload-file-container">
											<div className="m-file-upload-button-container">
												<label className="m-file-upload-button">
													<input
														type="file"
														className="m-add-file-input"
														id="file-upload"
														onChange={handleFileUpload}
													/>
													Dodaj załącznik
												</label>
												<label
													id="file-name"
													className={
														fileName
															? "m-file-name m-file-name-active"
															: "m-file-name"
													}
												>
													Dodano plik &#10004;
												</label>
											</div>
											<div className="m-file-condition-container">
												<span>
													Dodaj załącznik w formacie: txt, doc, docx, pdf, jpg,
													jpeg, png, xls lub xlsx.
												</span>
												<span>Wielkość pliku do 10 MB</span>
											</div>
										</div>
										<div className="m-policy-container">
											<span className="m-policy">
												Klikając Prześlij formularz zgadzasz się na
												przetwarzanie danych osobowych, zawartych w{" "}
												<a>Polityce prywatności</a>.
											</span>
										</div>
										<div className="m-sender-container">
											<div className="m-send-btn-container">
												<button className="m-send-btn" type="submit">
													Prześlij formularz
												</button>
												<label
													id="form-error"
													className={
														formVal.formValid
															? "m-form-error m-form-error-active"
															: "m-form-error m-form-sent"
													}
												>
													{formVal.formValid
														? "Uzupełnij brakujące pola"
														: null}
													{formVal.formSent ? "Formularz przesłany" : null}
												</label>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					);
				}}
			</Media>
		</>
	);
};

export default Form;
