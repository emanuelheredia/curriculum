import React, { useContext } from "react";
import miFoto from "../../assets/myImageMobile2.png";
import miFoto2 from "../../assets/myImageSinfondo.png";
import { languageContext } from "../../context/languageContext";
import { dictionary } from "../helpers/languageDict";

const Portada = () => {
	const { languajeSelected } = useContext(languageContext);
	const { title, subtitle, paragraph } = dictionary.portada;
	return (
		<div className="portada-container">
			<div className="portada-mainText">
				<h1>{title[languajeSelected]}</h1>
				<p className="portada-subTitle">{subtitle[languajeSelected]}</p>
			</div>
			<div className="portada-secondaryText">
				<p>{paragraph[0][languajeSelected]}</p>
				<p>{paragraph[1][languajeSelected]}</p>
			</div>
			<div className="portada-imageContainer">
				<img
					src={miFoto}
					className="portada-imageMobile"
					alt="mi-foto"
				></img>
				<img
					src={miFoto2}
					className="portada-imageLarge"
					alt="mi-foto"
				></img>
			</div>
		</div>
	);
};

export default Portada;
