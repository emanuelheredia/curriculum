import "./footer.css";
import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-info">
				<h1>Emanuel Heredia</h1>
				<p>Córdoba - Argentina</p>
			</div>
			<div className="footer-contact">
				<h3>Contact me</h3>
				<p>And let's get down to work</p>
			</div>
			<div className="footer-sns">
				<div className="design-by">Design By Emanuel Heredia</div>
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
						<i class="fa-brands fa-github github"></i>
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
