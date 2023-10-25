import miFoto from "../../media/mi-foto.jpg";
import { FiCheck } from "react-icons/fi";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-desc-container">
				<div className="about-desc">
					<h3>Acerca de mí</h3>
					<p className="text-efecto-maquina-escribir">
						{/* 					Passionate and continuously growing Front End Developer with
					strong skills in web development. Experienced in
					collaboration and teamwork, I enjoy providing innovative
					solutions. I am seeking opportunities to further learn and
					enhance my technical abilities. Committed to excellence, I
					focus on building attractive and functional interfaces.
					Ready to contribute my experience and enthusiasm to
					challenging projects. Skills: React JS | Python | Redux |
					JavaScript | HTML | CSS | NodeJS | Typescript | Selenium |
					Scrapy / Git | GitHub. */}
						Desarrollador Front End apasionado y en continuo
						crecimiento con sólidas habilidades en desarrollo web.
						Dispongo de experiencia en colaboración y trabajo en
						equipo, donde disfruto brindando soluciones innovadoras.
						Estoy buscando oportunidades para seguir aprendiendo y
						mejorar mis habilidades técnicas. Comprometido con la
						excelencia, me enfoco en construir interfaces atractivas
						y funcionales. Listo para aportar mi experiencia y
						entusiasmo a proyectos desafiantes.
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
					<h3>Habilidades</h3>
					<p className="text-efecto-maquina-escribir">
						HTML & CSS | JAVASCRIPT | REACTJS | REDUX | NODEJS |
						TYPESCRIPT | PYTHON | GIT | GITHUB | POSTMAN | JIRA |
						METODOLOGÍAS ÁGILES
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
