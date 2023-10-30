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
	const [width, setWidth] = useState(window.screen.width);
	const [scrollHeight, setScrollHeight] = useState(0);
	const [visibleSlide, setVisibleSlide] = useState(0);

	useEffect(() => {
		window.addEventListener("resize", (e) =>
			setWidth(e.currentTarget.innerWidth),
		);
	}, []);
	const handleScroll = () => {
		const position = window.pageYOffset;
		setScrollHeight(position);
	};
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	}, [scrollHeight]);
	return (
		<div className="App">
			<Nadbar
				scrollHeight={scrollHeight}
				setVisibleSlide={setVisibleSlide}
				visibleSlide={visibleSlide}
			/>
			{width > 700 ? (
				<BlogPostCardSlider
					setVisibleSlide={setVisibleSlide}
					visibleSlide={visibleSlide}
				>
					<Portada />
					<About />
					<MyProjects width={width} />
					<Footer />
				</BlogPostCardSlider>
			) : (
				<div style={{ marginTop: "60px" }}>
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
