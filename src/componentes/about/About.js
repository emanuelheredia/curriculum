import "./about.css";
import miFoto from "../../media/mi-foto.jpg";

const About = () => {
	return (
		<div className="about-container">
			<div className="about-desc">
				<h3>Let me tell you about me</h3>
				<p className="text-efecto-maquina-escribir">
					I am a Frontend developer with a great passion for solving
					problems using new technologies, and with great enthusiasm
					for continuous learning. I would love to be part of a
					company that allows me to work cooperatively with other
					people and thus be able to learn and develop professionally
					with them.
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
