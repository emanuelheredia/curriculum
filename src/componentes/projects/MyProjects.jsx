import React, { useEffect, useState, useCallback } from "react";
import projectsInfo from "./projectsInfo";
import "react-awesome-slider/dist/styles.css";
import ProjectCard from "./ProjectCard";

const MyProjects = ({ width }) => {
	const [zoomIsOpen, setZoomIsOpen] = React.useState(false);
	const [imageZoom, setImageZoom] = useState(null);
	const [scrollHeight, setScrollHeight] = useState(0);
	const [projectImagesToZoom, setProjectImagesToZoom] = useState(null);
	const [heightToImageZoom, setHeightToImageZoom] = useState("auto");
	useEffect(() => {
		if (width < 700) {
			setHeightToImageZoom("600px");
		}
		if (width > 700 && width < 1200) {
			setHeightToImageZoom("70%");
		}
		if (width > 1200 && width < 1500) {
			setHeightToImageZoom("90%");
		}
		if (width > 1500) {
			setHeightToImageZoom("100%");
		}
	}, [width]);
	console.log(scrollHeight);
	return (
		<div className="projects-container">
			<div className="projects-title">
				<h2>My Projects</h2>
			</div>
			<div className="cardProjects-container">
				{projectsInfo.map((project, index) => (
					<div key={index} className="cardContainer">
						<ProjectCard
							setZoomIsOpen={setZoomIsOpen}
							setImageZoom={setImageZoom}
							project={project}
							setProjectImagesToZoom={setProjectImagesToZoom}
							setScrollHeight={setScrollHeight}
						/>
					</div>
				))}
			</div>
			{/* 			<Carousel
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
 */}{" "}
			{zoomIsOpen && (
				<div
					className="imageZoom-container"
					style={{
						height: heightToImageZoom,
						top: scrollHeight - 250,
					}}
				>
					<img src={projectImagesToZoom[imageZoom]} alt="imageZoom" />
					<p
						className="btn-closeZoomImage"
						onClick={() => setZoomIsOpen(false)}
					>
						X
					</p>
				</div>
			)}
		</div>
	);
};

export default MyProjects;
