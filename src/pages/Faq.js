import React, { useState } from "react";
import "../style/css/faq.css";
import Question from "./faqComponents/Question";
import RedSection from "./faqComponents/RedSection";

const questionData = [
	{
		quest: "Kim jest tłumacz przysięgły?",
		res: "Tłumaczy",
		key: "faqLine1Active",
	},
	{
		quest: "Czym różni się tłumaczenie zwykłe od przysięgłego?",
		res: "Lorem ipsum dolor sit amet",
		key: "faqLine2Active",
	},
	{
		quest: "Czy DAG-MAR oferuje również tłumaczenia ustne?",
		res: "Lorem ipsum dolor sit amet",
		key: "faqLine3Active",
	},
	{
		quest: "Czym jest tłumaczenie techniczne?",
		res: "Lorem ipsum dolor sit amet",
		key: "faqLine4Active",
	},
	{
		quest: "Czym jest tłumaczenie poświadczone?",
		res: "Lorem ipsum dolor sit amet",
		key: "faqLine5Active",
	},
	{
		quest: "Czym jest tłumaczenie medyczne?",
		res: "Lorem ipsum dolor sit amet",
		key: "faqLine6Active",
	},
	{
		quest: "Czy potrzebuje oryginałów dokumentów, aby wykonać tłumaczenie?",
		res: "Lorem ipsum dolor sit amet",
		key: "faqLine7Active",
	},
	{
		quest: "Jak uzyskać wycenę dokumentu, który chcę przetłumaczyć?",
		res: "Lorem ipsum dolor sit amet",
		key: "faqLine8Active",
	},
];

const Faq = () => {
	const [questionsView, setQuestionsView] = useState({
		faqLine1Active: false,
		faqLine2Active: false,
		faqLine3Active: false,
		faqLine4Active: false,
		faqLine5Active: false,
		faqLine6Active: false,
		faqLine7Active: false,
		faqLine8Active: false,
	});

	const handlePlusClick = (e) => {
		setQuestionsView({
			...questionsView,
			[e.target.id]: !questionsView[e.target.id],
		});
	};

	return (
		<div className="faq-container">
			<div className="faq-header-container">
				<h2 className="faq-header">FAQ</h2>
				<h3 className="faq-header h3">Ty pytasz, my odpowiadamy</h3>
			</div>
			{questionData.map((e) => {
				return (
					<Question
						header={e}
						key={e.key}
						stateLine={e.key}
						handler={handlePlusClick}
						state={questionsView}
					/>
				);
			})}
			<RedSection />
		</div>
	);
};

export default Faq;
