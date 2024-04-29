import React, { createContext, useState } from "react";

const newsData = {
	newsOn: false,
	txt1: "",
	txt2: "",
};

export const NewsContext = createContext();

const News = ({ children }) => {
	const [news, setNews] = useState(newsData);
	return (
		<NewsContext.Provider value={[news, setNews]}>
			{children}
		</NewsContext.Provider>
	);
};

export default News;
