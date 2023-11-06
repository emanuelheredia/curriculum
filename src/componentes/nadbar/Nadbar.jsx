import React, { useState, useEffect, useContext } from "react";
import { CgMenuGridR } from "react-icons/cg";
import { languageContext } from "../../context/languageContext";
import Switch from "react-input-switch";
import { dictionary } from "../helpers/languageDict";
const Nadbar = ({ scrollHeight, visibleSlide, setVisibleSlide }) => {
	const { about, proyects, contactme } = dictionary.nadbar;
	const { languajeSelected, setLanguajeSelected } =
		useContext(languageContext);
	const [showMenu, setSetshowMenu] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const [customStyle, setCustomStyle] = useState({});
	const [listStyle, setListStyle] = useState({});
	const [changeLanguage, setChangeLanguage] = useState("esp");
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
	const toPortada = () => {
		if (width > 700) setVisibleSlide(0);
		else
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
	};
	const toTheAbout = () => {
		if (width > 700) {
			setVisibleSlide(1);
		} else
			window.scrollTo({
				top: tamañoPAantalla < 450 ? 750 : 620,
				left: 0,
				behavior: "smooth",
			});
	};
	const toTheProyects = () => {
		if (width > 700) setVisibleSlide(2);
		else
			window.scrollTo({
				top: tamañoPAantalla < 450 ? 1450 : 1300,
				left: 0,
				behavior: "smooth",
			});
	};
	const toTheContact = () => {
		if (width > 700) setVisibleSlide(3);
		else window.scrollTo({ top: 3500, left: 0, behavior: "smooth" });
	};
	useEffect(() => {
		if (width < 780) {
			setCustomStyle({ backgroundColor: "#4831d4" });
		} else if (width > 780 && visibleSlide === 0) {
			setCustomStyle({
				background: "linear-gradient(90deg, #4831d4 67%,  #ccf381 33%)",
			});
			setListStyle({});
		} else if (width > 780 && visibleSlide !== 0) {
			setCustomStyle({ backgroundColor: "#4831d4" });
			setListStyle({ color: "#ccf381" });
		}
	}, [scrollHeight, visibleSlide, width]);
	useEffect(() => {
		setLanguajeSelected(changeLanguage);
	}, [changeLanguage]);
	return (
		<div className={`nadbar`} style={customStyle}>
			<div className="nadbar-logoContainer" onClick={toTheTop}>
				<p onClick={toPortada} className="nadbar-logo">
					E H
				</p>
				{width > 780 && (
					<div onClick={toPortada} className="completeName-container">
						<p className="nadbar-completeName">
							Emanuel Heredia<span>&#160;</span>
						</p>
					</div>
				)}
				<div className="switch-container">
					<p
						className="nadbar-switchLeyend"
						onClick={() => setChangeLanguage("esp")}
					>
						ESP
					</p>
					<Switch
						on="eng"
						off="esp"
						value={changeLanguage}
						onChange={setChangeLanguage}
						className="nadbar-switch"
						styles={{
							track: {
								backgroundColor: "#ccf381",
							},
							trackChecked: {
								backgroundColor: "#ccf381",
							},
							button: {
								backgroundColor: "#4831d4",
							},
							buttonChecked: {
								backgroundColor: "#4831d4",
							},
						}}
					/>
					<p
						className="nadbar-switchLeyend"
						onClick={() => setChangeLanguage("eng")}
					>
						ENG
					</p>
				</div>
			</div>
			<nav className="nadbar-navegationContainer">
				<CgMenuGridR
					className="nadbar-menuIcon"
					onClick={() => setSetshowMenu(!showMenu)}
				/>
				<ul
					className={`list-container ${showMenu ? "showList" : null}`}
				>
					<li style={listStyle} onClick={toTheAbout}>
						{about[languajeSelected]}
					</li>
					<li style={listStyle} onClick={toTheProyects}>
						{proyects[languajeSelected]}
					</li>
					<li style={listStyle} onClick={toTheContact}>
						{contactme[languajeSelected]}
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nadbar;
