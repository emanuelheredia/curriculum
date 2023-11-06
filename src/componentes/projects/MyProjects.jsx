import React, { useEffect, useState, useContext } from "react";
import projectsInfo from "./projectsInfo";
import "react-awesome-slider/dist/styles.css";
import ProjectCard from "./ProjectCard";
import Modal from "react-modal";
import { Carousal } from "react-3d-carousal";
import { languageContext } from "../../context/languageContext";
import { dictionary } from "../helpers/languageDict";

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
	const [aligCarousel, setAligCarousel] = useState("17%");
	const [scrollHeight, setScrollHeight] = useState(0);
	const [projectImagesToZoom, setProjectImagesToZoom] = useState("");
	const { languajeSelected } = useContext(languageContext);
	const { myProjects } = dictionary;

	function openModal2() {
		setIs2Open(true);
	}
	function closeModal2() {
		setIs2Open(false);
	}
	useEffect(() => {
		if (width < 550) {
			setAligCarousel("16%");
		}
		if (width > 550 && width < 700) {
			setAligCarousel("23%");
		}
		if (width < 700) {
			customStyles.content.height = "350px";
		}
		if (width > 700 && width < 1200) {
			setAligCarousel("20%");
			customStyles.content.height = "70%";
		}
		if (width > 1200 && width < 1500) {
			customStyles.content.height = "90%";
			setAligCarousel("37%");
		}
		if (width > 1500) {
			customStyles.content.height = "95%";
			setAligCarousel("37%");
		}
	}, [width]);
	return (
		<div className="projects-container">
			<div className="projects-title">
				<h2>{myProjects[languajeSelected]}</h2>
			</div>
			<div
				style={{ left: aligCarousel }}
				className="cardProjects-container"
			>
				<Carousal
					slides={projectsInfo.map((project, index) => (
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
				/>
			</div>
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
