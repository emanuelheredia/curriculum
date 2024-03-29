import React from "react";

const Info = ({ addSectionRef }) => {
	return (
		<div ref={addSectionRef} className="info-container">
			<div className="linea-separadora"></div>
			<div className="info">
				<h1>Let's work together and create something unique</h1>
			</div>
		</div>
	);
};

export default Info;
