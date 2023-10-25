import React from "react";
import miFoto from "../../assets/myImageMobile2.png";
import miFoto2 from "../../assets/myImageSinfondo.png";

const Portada = () => {
	return (
		<div className="portada-container">
			<div className="portada-mainText">
				<h1>Frontend Developer.</h1>
				<p className="portada-subTitle">
					Me gusta crear productos frontend sólidos y escalables con
					excelentes experiencias de usuario.
				</p>
			</div>
			<div className="portada-secondaryText">
				<p>
					Comprometido con la excelencia y mejora progresiva en
					sistemas de diseño e ingeniería UI
				</p>
				<p>
					Creo soluciones innovadoras y funcionales, listo para
					aportar experiencia a proyectos desafiantes y de gran
					impacto.
				</p>
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
