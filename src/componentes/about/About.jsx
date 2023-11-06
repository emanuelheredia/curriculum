import React, { useContext } from "react";
import { languageContext } from "../../context/languageContext";
import { dictionary } from "../helpers/languageDict";

const About = () => {
	const { languajeSelected } = useContext(languageContext);
	const { title, aboutMe, skillsTitle, skills } = dictionary.aboutMe;
	return (
		<div className="about-container">
			<div className="about-desc-container">
				<div className="about-desc">
					<h3>{title[languajeSelected]}</h3>
					<p className="text-efecto-maquina-escribir">
						{aboutMe[languajeSelected]}
					</p>
				</div>
				<div className="imageAbout-container">
					<img
						src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png"
						className="about-desc-imgDeco"
						alt="img-desc"
					/>
				</div>
			</div>
			<div className="about-desc-container">
				<div className="imageAbout-container">
					<img
						src="https://cdn-icons-png.flaticon.com/128/5398/5398428.png"
						className="about-desc-imgDeco"
						alt="img-desc"
					/>
				</div>
				<div className="about-desc">
					<h3>{skillsTitle[languajeSelected]}</h3>
					<p className="text-efecto-maquina-escribir">
						{skills[languajeSelected]}
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
