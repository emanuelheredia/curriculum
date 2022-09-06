import React from "react";
import Header from "./componentes/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home";
import SobreMi from "./componentes/SobreMi";
import Formacion from "./componentes/Formacion";
import Habilidades from "./componentes/Habilidades";
import Contacto from "./componentes/Contacto";
import Footer from "./componentes/Footer";
import Cover from "./componentes/cover/Cover";
import "./app.css";

function App() {
	return (
		<>
			<Cover />
		</>
	);
}

export default App;
