import React, { useContext } from "react";
import { languageContext } from "../../context/languageContext";
import { dictionary } from "../helpers/languageDict";

const Footer = () => {
	const { leyends, design } = dictionary.contactMe;
	const { languajeSelected } = useContext(languageContext);

	return (
		<footer className="footer">
			<div className="footer-info">
				<h1>Emanuel Heredia</h1>
				<p>Córdoba - Argentina</p>
			</div>
			<div className="footer-divisorLine"></div>
			<div className="footer-contact">
				<h3>{leyends[0][languajeSelected]}</h3>
				<p>{leyends[1][languajeSelected]}</p>
			</div>
			<div className="footer-sns">
				<div className="design-by">{design[languajeSelected]}</div>
				<div className="sns-links">
					<a
						href={
							"https://www.linkedin.com/in/emanuel-heredia-41749421a/"
						}
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-linkedin likedin"></i>
					</a>
					<a
						target="_blank"
						href={"https://github.com/emanuelheredia"}
						rel="noreferrer"
					>
						<i className="fa-brands fa-github github"></i>
					</a>
					<a
						href={"https://wa.me/5493512431240"}
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-whatsapp whatsapp"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
