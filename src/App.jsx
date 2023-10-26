import { useState, useEffect, useRef } from "react";
import "./app.css";
import Nadbar from "./componentes/nadbar/Nadbar";
import About from "./componentes/about/About";
import MyProjects from "./componentes/projects/MyProjects";
import Info from "./componentes/info/Info";
import Footer from "./componentes/footer/Footer";
import Aptitudes from "./componentes/aptitudes/Aptitudes";
import { SpinnerCircularSplit } from "spinners-react";
import "./styles/styles.scss";
import Portada from "./componentes/portada/Portada";
import BlogPostCardSlider from "./componentes/sliderPage/BlogPostCardSlider";
import BlogPostCard from "./componentes/sliderPage/BlogPostCard";

const App = () => {
	const [scrollHeight, setScrollHeight] = useState(0);
	const [width, setWidth] = useState(window.screen.width);
	useEffect(() => {
		window.addEventListener("resize", (e) =>
			setWidth(e.currentTarget.innerWidth),
		);
	}, []);
	return (
		<div className="App">
			<Nadbar scrollHeight={scrollHeight} />
			{width > 700 ? (
				<BlogPostCardSlider>
					<Portada />
					<About />
					<MyProjects width={width} />
					<Footer />
				</BlogPostCardSlider>
			) : (
				<div style={{ marginTop: "100px" }}>
					{" "}
					<Portada />
					<About />
					<MyProjects width={width} />
					<Footer />
				</div>
			)}
		</div>
	);
};
export default App;
