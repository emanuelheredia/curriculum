import React, { useEffect, useState, useCallback } from "react";
import projectsInfo from "./projectsInfo";
import "react-awesome-slider/dist/styles.css";
import ProjectCard from "./ProjectCard";
import Modal from "react-modal";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "90%",
		display: "flex",
		flexDirection: "column",
		backgroundColor: "rgba(0, 0, 0, 0.900)",
	},
};
Modal.setAppElement("*");

const MyProjects = ({ width }) => {
	const [modal2IsOpen, setIs2Open] = React.useState(false);
	const [imageZoom, setImageZoom] = useState(null);
	const [heightToImageZoom, setHeightToImageZoom] = useState("600px");
	const [scrollHeight, setScrollHeight] = useState(0);
	const [projectImagesToZoom, setProjectImagesToZoom] = useState("");

	function openModal2() {
		setIs2Open(true);
	}
	function closeModal2() {
		setIs2Open(false);
	}
	useEffect(() => {
		if (width < 700) {
			customStyles.content.height = "400px";
		}
		if (width > 700 && width < 1200) {
			customStyles.content.height = "70%";
		}
		if (width > 1200 && width < 1500) {
			customStyles.content.height = "90%";
		}
		if (width > 1500) {
			customStyles.content.height = "95%";
		}
	}, [width]);
	return (
		<div className="projects-container">
			<div className="projects-title">
				<h2>My Projects</h2>
			</div>
			<div className="cardProjects-container">
				{projectsInfo.map((project, index) => (
					<div key={index} className="cardContainer">
						<ProjectCard
							openModal2={openModal2}
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
			<Modal
				isOpen={modal2IsOpen}
				onRequestClose={closeModal2}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<button className="btn-closeModal" onClick={closeModal2}>
					X
				</button>
				{
					<div className="imageZoom-container">
						<img
							src={projectImagesToZoom[imageZoom]}
							alt="imageZoom"
						/>
					</div>
				}{" "}
			</Modal>
		</div>
	);
};

export default MyProjects;
