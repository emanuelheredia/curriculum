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
const customStyles2 = {
	content: {
		top: "20%",
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
const ProjectCard = ({ project }) => {
	const [modal1IsOpen, setIs1Open] = React.useState(false);
	const [modal2IsOpen, setIs2Open] = React.useState(false);
	const [imageZoom, setImageZoom] = useState(null);

	function openModal1() {
		setIs1Open(true);
	}
	function closeModal1() {
		setIs1Open(false);
	}
	function openModal2() {
		setIs2Open(true);
	}
	function closeModal2() {
		setIs2Open(false);
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
								openModal2();
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
				{/* 				<img
					className="projectCard-imageContainer"
					src={project.images[2]}
				/>
 */}{" "}
			</div>
			<Modal
				isOpen={modal2IsOpen}
				onRequestClose={closeModal2}
				style={customStyles2}
				contentLabel="Example Modal"
			>
				<button className="btn-closeModal" onClick={closeModal2}>
					X
				</button>
				<div className="productModal-text-container">
					<img
						className="productModal-imageZoom"
						src={project.images[imageZoom]}
					/>
				</div>
			</Modal>

			<div className="projectCard-linksContainer">
				{" "}
				<a
					target="_blank"
					href={"https://github.com/emanuelheredia/power-tracker"}
					rel="noreferrer"
				>
					<i className="fa-brands fa-github github-projectCard"></i>
				</a>
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
