import React from "react";

const FormDesktop = (props) => {
	const { handleInput, handleSubmit } = props;
	return (
		<div className="form-section-container">
			<div className="contact-with-us-text-container">
				<div className="contact-with-us-text">
					<h2>Skontaktuj się z nami</h2>
				</div>
				<span className="contact-with-us-bottomtext">
					Lorem ipsum dolor sit amet consectetur. In adipiscing sed auctor est
					condimentum pellentesque mauris consequat quis. Sollicitudin lacus
					nibh metus pellentesque congue tempor risus rhoncus.{" "}
				</span>
			</div>
			<div className="form-container">
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="name-input-container">
						<input
							name="name"
							type="name"
							placeholder="Imię*"
							className="name-input contact-input"
							onChange={handleInput}
							value={formVal.name}
						/>
						<input
							name="surname"
							type="surname"
							placeholder="Nazwisko*"
							className="surname-input contact-input"
							onChange={handleInput}
							value={formVal.surname}
						/>
					</div>
					<div className="email-and-theme-container">
						<input
							name="email"
							type="email"
							placeholder="Adres e-mail*"
							className="email-input contact-input"
							onChange={handleInput}
							value={formVal.email}
						/>
						<input
							name="topic"
							type="topic"
							placeholder="Temat wiadomości*"
							className="theme-input contact-input"
							onChange={handleInput}
							value={formVal.topic}
						/>
					</div>
					<textarea
						name="message"
						type="message"
						placeholder="Treść wiadomości*"
						className="contact-msg contact-input"
						onChange={handleInput}
						value={formVal.message}
					/>

					<div className="policy-and-sender-container">
						<div className="policy-container">
							<span className="policy">
								Klikając Prześlij formularz zgadzasz się na przetwarzanie danych
								osobowych, zawartych w <a>Polityce prywatności</a>.
							</span>
							<span className="pole">*Pole obowiązkowe</span>
						</div>
						<div className="sender-container">
							<div className="upload-file-container">
								<div className="file-upload-button-container">
									<label className="file-upload-button">
										<input
											type="file"
											className="add-file-input"
											id="file-upload"
											onChange={handleFileUpload}
										/>
										Dodaj załącznik
									</label>
									<label
										id="file-name"
										className={
											fileName ? "file-name file-name-active" : "file-name"
										}
									>
										Dodano plik &#10004;
									</label>
								</div>
								<div className="file-condition-container">
									<span>
										Dodaj załącznik w formacie: txt, doc,
										<br /> docx, pdf, jpg, jpeg, png, xls lub xlsx.
									</span>
									<span>Wielkość pliku do 10 MB</span>
								</div>
							</div>
							<div className="send-btn-container">
								<button className="send-btn" type="submit">
									Prześlij formularz
								</button>
								<label
									id="form-error"
									className={
										formVal.formValid
											? "form-error form-error-active"
											: "form-error form-sent"
									}
								>
									{formVal.formValid ? "Uzupełnij brakujące pola" : null}
									{formVal.formSent ? "Formularz przesłany" : null}
								</label>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FormDesktop;
