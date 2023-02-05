import React, { createContext, useState } from "react";

const newsData = {
	newsOn: true,
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
