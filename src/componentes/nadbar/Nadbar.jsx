import React, { useState, useEffect } from "react";
import { CgMenuGridR } from "react-icons/cg";

const Nadbar = ({ scrollHeight }) => {
	const [showMenu, setSetshowMenu] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const tamañoPAantalla = window.screen.width;
	useEffect(() => {
		window.addEventListener("resize", (e) => setWidth(e.target.innerWidth));
	});
	useEffect(() => {
		if (showMenu && width > 780) setSetshowMenu(false);
	}, [width]);
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
		<div className={`nadbar scrolling`}>
			{/* 		</div><div className={`nadbar ${scrollHeight > 20 && "scrolling"}`}>
			 */}
			<div className="nadbar-logoContainer" onClick={toTheTop}>
				<p className="nadbar-logo">E H</p>
				{width > 780 && (
					<div className="completeName-container">
						<p className="nadbar-completeName">
							Emanuel Heredia<span>&#160;</span>
						</p>
					</div>
				)}
			</div>
			<nav className="nadbar-navegationContainer">
				<CgMenuGridR
					className="nadbar-menuIcon"
					onClick={() => setSetshowMenu(!showMenu)}
				/>
				<ul
					className={`list-container ${showMenu ? "showList" : null}`}
				>
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
