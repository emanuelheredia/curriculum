import { useState, useEffect } from "react";
import Cover from "./componentes/cover/Cover";
import "./app.css";
import Nadbar from "./componentes/nadbar/Nadbar";
import About from "./componentes/about/About";
import Slider from "./componentes/slider/Slider";
import Info from "./componentes/info/Info";
import Footer from "./componentes/footer/Footer";
import Aptitudes from "./componentes/aptitudes/Aptitudes";
import { SpinnerCircularSplit } from "spinners-react";

function App() {
	const [scrollHeight, setScrollHeight] = useState(0);
	const [mostrarSpinner, setMostrarSpinner] = useState({
		mostrar: true,
		clase: "spinner-container",
	});
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollHeight(position);
	};
	useEffect(() => {
		setTimeout(() => {
			setMostrarSpinner({ mostrar: false, clase: "ocultar" });
		}, 3000);
	}, []);
	console.log(mostrarSpinner.clase);
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [scrollHeight]);

	return (
		<div className="App">
			<div className={mostrarSpinner.clase}>
				<SpinnerCircularSplit
					className="spinner"
					size={150}
					color={"#3b5998"}
					enabled={mostrarSpinner}
				/>
			</div>
			<Cover />
			{!mostrarSpinner.mostrar && (
				<>
					<Nadbar scrollHeight={scrollHeight} /> <About />
					<Slider />
					<Aptitudes />
					<Info />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;
