import React from "react";
import projectsInfo from "./projectsInfo";
import "react-awesome-slider/dist/styles.css";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
	return (
		<div className="projects-container">
			<div className="projects-title">
				<h2>My Projects</h2>
			</div>
			<div className="cardProjects-container">
				{projectsInfo.map((project, index) => (
					<div key={index} className="cardContainer">
						<ProjectCard project={project} />
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
		</div>
	);
};

export default MyProjects;
