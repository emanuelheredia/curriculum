import miFoto from "../../media/mi-foto.jpg";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-desc">
				<h3>Let me tell you about me</h3>
				<p className="text-efecto-maquina-escribir">
					Passionate and continuously growing Front End Developer with
					strong skills in web development. Experienced in
					collaboration and teamwork, I enjoy providing innovative
					solutions. I am seeking opportunities to further learn and
					enhance my technical abilities. Committed to excellence, I
					focus on building attractive and functional interfaces.
					Ready to contribute my experience and enthusiasm to
					challenging projects. Skills: React JS | Python | Redux |
					JavaScript | HTML | CSS | NodeJS | Typescript | Selenium |
					Scrapy / Git | GitHub.
					{/* Soy desarrollador Frontend con gran pasión por
					resolver problemas utilizando nuevas tecnologías, y con gran
					entusiasmo en aprender continuamente. Me encantaría formar
					parte de una empresa que me permita trabajar de forma
					cooperativa con otras personas y así poder aprender y
					desarrollarme de manera profesional junto a ellos. */}
				</p>
			</div>
			<div className="about-img">
				<img src={miFoto} alt="mi-foto"></img>
			</div>
		</div>
	);
};

export default About;
