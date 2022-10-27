import "./aptitudes.css";
import React from "react";
import Icons from "./Icons";
import htmlIcon from "../../media/icons/html.png";
import cssIcon from "../../media/icons/css.png";
import javascriptIcon from "../../media/icons/javascript.png";
import reactIcon from "../../media/icons/react.png";
import nodeJSIcon from "../../media/icons/nodejs.png";
import mongoIcon from "../../media/icons/mongo.png";
import bootstrapIcon from "../../media/icons/bootstrap.png";
import gitIcon from "../../media/icons/git.png";
import gitHubIcon from "../../media/icons/github.png";
import pythonIcon from "../../media/icons/python.png";
import typescript from "../../media/icons/typescript.png";

const icons = [
	{
		nombre: "HTML",
		imagen: htmlIcon,
		valoracion: 4,
	},
	{
		nombre: "CSS",
		imagen: cssIcon,
		valoracion: 4,
	},
	{
		nombre: "JavaScript",
		imagen: javascriptIcon,
		valoracion: 3.5,
	},
	{
		nombre: "ReactJS",
		imagen: reactIcon,
		valoracion: 3.5,
	},
	{
		nombre: "NodeJS",
		imagen: nodeJSIcon,
		valoracion: 2.5,
	},
	{
		nombre: "Git",
		imagen: gitIcon,
		valoracion: 3.5,
	},
	{
		nombre: "GitHub",
		imagen: gitHubIcon,
		valoracion: 3.5,
	},
	{
		nombre: "Bootstrap",
		imagen: bootstrapIcon,
		valoracion: 4,
	},
	{
		nombre: "Python",
		imagen: pythonIcon,
		valoracion: 1.5,
	},
	{
		nombre: "MongoDB",
		imagen: mongoIcon,
		valoracion: 1.5,
	},
	{
		nombre: "Typescript",
		imagen: typescript,
		valoracion: 4,
	},
];

const Aptitudes = () => {
	return (
		<div className="aptitudes-container">
			<div className="aptitudes-title">
				<h2>My Aptitudes</h2>
			</div>
			<div className="icons-container">
				{icons.map((icon) => (
					<Icons icon={icon} />
				))}
			</div>
		</div>
	);
};

export default Aptitudes;
