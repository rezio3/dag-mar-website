import React, { createContext, useState } from "react";

const cookiesData = {
	cookiesOn: true,
};

export const CookiesContext = createContext();

const Cookies = ({ children }) => {
	const [cookies, setCookies] = useState(cookiesData);
	return (
		<CookiesContext.Provider value={[cookies, setCookies]}>
			{children}
		</CookiesContext.Provider>
	);
};

export default Cookies;
