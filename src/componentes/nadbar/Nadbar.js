const Nadbar = ({ scrollHeight }) => {
	const tamañoPAantalla = window.screen.width;
	const toTheTop = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	const toTheAbout = () => {
		window.scrollTo({
			top: tamañoPAantalla < 450 ? 750 : 800,
			left: 0,
			behavior: "smooth",
		});
	};
	const toTheProyects = () => {
		window.scrollTo({
			top: tamañoPAantalla < 450 ? 1300 : 1500,
			left: 0,
			behavior: "smooth",
		});
	};
	const toTheAptitudes = () => {
		window.scrollTo({
			top: tamañoPAantalla < 450 ? 1800 : 2350,
			left: 0,
			behavior: "smooth",
		});
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
					<li onClick={toTheProyects}>My Projects</li>
					<li onClick={toTheAptitudes}>My Aptitudes</li>
					<li onClick={toTheContact}>Contact Me</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nadbar;
