import React, { useState } from "react";
import { languageContext } from "./languageContext";
const StateLanguage = ({ children }) => {
	const [languajeSelected, setLanguajeSelected] = useState("eng");

	return (
		<languageContext.Provider
			value={{ languajeSelected, setLanguajeSelected }}
		>
			{children}
		</languageContext.Provider>
	);
};

export default StateLanguage;
