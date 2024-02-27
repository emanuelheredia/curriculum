import React from "react";

const FormContact = () => {
	return (
		<div className="formContact-container">
			<form action="">
				<h2>Contactame</h2>
				<div>
					<label htmlFor="">Nombre Completo</label>
					<input type="text" />
				</div>
				<div>
					<label htmlFor="">Email de Contacto</label>
					<input type="email" />
				</div>
				<div>
					<label htmlFor="">Mensaje</label>
					<textarea type="email" />
				</div>
				<input
					className="formContact-btnSend"
					type="submit"
					value="Enviar"
				/>
			</form>
		</div>
	);
};

export default FormContact;
