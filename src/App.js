import { useState, useEffect } from "react";
import Cover from "./componentes/cover/Cover";
import "./app.css";
import Nadbar from "./componentes/nadbar/Nadbar";
import About from "./componentes/about/About";
import Slider from "./componentes/slider/Slider";
import Info from "./componentes/info/Info";
import Footer from "./componentes/footer/Footer";
import Aptitudes from "./componentes/aptitudes/Aptitudes";

function App() {
	const [scrollHeight, setScrollHeight] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollHeight(position);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [scrollHeight]);
	return (
		<div className="App">
			<Nadbar scrollHeight={scrollHeight} />
			<Cover />
			<About />
			<Slider />
			<Aptitudes />
			<Info />
			<Footer />
		</div>
	);
}

export default App;
