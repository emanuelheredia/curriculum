import React from "react";
import Header from "./componentes/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./componentes/Home";
import SobreMi from "./componentes/SobreMi"
import Formacion from "./componentes/Formacion"
import Habilidades from "./componentes/Habilidades"
import Contacto from "./componentes/Contacto"


function App() {
  return (
    <>
    <BrowserRouter> 
      <Header/>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/sobremi" element={<SobreMi/>}/>
        <Route exact path="/formacion" element={<Formacion/>}/>
        <Route exact path="/habilidades" element={<Habilidades/>}/>
        <Route exact path="/contacto" element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
