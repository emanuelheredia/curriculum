import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import Modal from "react-modal";
const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "350px",
		height: "350px",
		display: "flex",
		flexDirection: "column",
		backgroundColor: "rgba(0, 0, 0, 0.900)",
	},
};

Modal.setAppElement("*");
const ProjectCard = ({
	project,
	setImageZoom,
	setZoomIsOpen,
	setProjectImagesToZoom,
}) => {
	const [modal1IsOpen, setIs1Open] = React.useState(false);

	function openModal1() {
		setIs1Open(true);
	}
	function closeModal1() {
		setIs1Open(false);
	}

	return (
		<div className="proyectCard-container">
			<h4 className="projectCard-title">{project.projectName}</h4>
			<div className="projectCard-sliderContainer">
				<AwesomeSlider>
					{project.images.map((image, index) => (
						<div
							key={index}
							onClick={() => {
								setImageZoom(index);
								setProjectImagesToZoom(project.images);
								setZoomIsOpen(true);
							}}
						>
							<img
								src={image}
								alt=""
								className="projectCard-imageContainer"
							/>
						</div>
					))}
				</AwesomeSlider>
			</div>

			<div className="projectCard-linksContainer">
				{" "}
				<a target="_blank" href={project.hrefGitHub} rel="noreferrer">
					<i className="fa-brands fa-github github-projectCard"></i>
				</a>
				{project.hrefApp && (
					<a
						target="_blank"
						href={"https://power-tracker.vercel.app/"}
						rel="noreferrer"
					>
						<i
							class="fa fa-link link-projectCard"
							aria-hidden="true"
						></i>
					</a>
				)}
				<a rel="noreferrer">
					<i
						class="fa fa-info-circle info-projectCard"
						aria-hidden="true"
						onClick={openModal1}
					></i>
				</a>
			</div>
			<Modal
				isOpen={modal1IsOpen}
				onRequestClose={closeModal1}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<button className="btn-closeModal" onClick={closeModal1}>
					X
				</button>
				<div className="productModal-text-container">
					<h4 className="productModal-title">
						Nombre del Proyecto :{" "}
						<p style={{ fontWeight: "bolder" }}>
							{project.projectName}
						</p>
					</h4>
					<h4 className="productModal-descripcion">
						Tecnologías Utilizadas :{" "}
						<p style={{ fontWeight: "bolder" }}>
							{project.tecnologies}
						</p>
					</h4>
					<h4 className="productModal-descripcion">
						Descripción : <p>{project.detalles}</p>
					</h4>
				</div>
			</Modal>
		</div>
	);
};

export default ProjectCard;
