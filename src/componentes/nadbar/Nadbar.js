import "./nadbar.css";

const Nadbar = ({ scrollHeight }) => {
	const toTheTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	const toTheAbout = () => {
		window.scrollTo({ top: 800, left: 0, behavior: "smooth" });
	};
	const toTheProyects = () => {
		window.scrollTo({ top: 1500, left: 0, behavior: "smooth" });
	};
	const toTheAptitudes = () => {
		window.scrollTo({ top: 2350, left: 0, behavior: "smooth" });
	};
	const toTheContact = () => {
		window.scrollTo({ top: 3500, left: 0, behavior: "smooth" });
	};
	return (
		<div className={`nadbar ${scrollHeight > 20 && "scrolling"}`}>
			<div className="nadbar-logo" onClick={toTheTop}>
				E H
			</div>
			<nav>
				<ul className="list-container">
					<li onClick={toTheAbout}>About Me</li>
					<li onClick={toTheProyects}>My Proyects</li>
					<li onClick={toTheAptitudes}>My Aptitudes</li>
					<li onClick={toTheContact}>Contact Me</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nadbar;
