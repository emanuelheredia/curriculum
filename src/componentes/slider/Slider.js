import React from "react";
import "./slider.css";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";

const Slider = () => {
	return (
		<div className="carousel-container">
			<div className="carousel-title">
				<h2>My Projects</h2>
			</div>
			<Carousel
				plugins={["arrows"]}
				slidesPerPage={5}
				animationSpeed={300}
				offset={50}
				itemWidth={400}
				slides={Slides}
				breakpoints={{
					960: {
						slidesPerPage: 1,
						itemWidth: 250,
					},
				}}
			/>
		</div>
	);
};

export default Slider;
