import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div className='encabezado'>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid d-flex ">
                    <NavLink className="navbar-brand text-light fs-2 nombre-encabezado" to="/">EMANUEL <b>HEREDIA</b></NavLink>
                    <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end menu-desplegable " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-primary m-2 " data-bs-dismiss="offcanvas">
                        <li className="nav-item p-2">
                        <NavLink  className="nav-link text-light" to="/sobremi">Sobre Mí</NavLink>
                        </li>
                        <li className="nav-item p-2">
                        <NavLink  className="nav-link text-light" to="/formacion">Formación</NavLink>
                        </li>
                        <li className="nav-item p-2">
                        <NavLink className="nav-link text-light"  to="/habilidades">Habilidades</NavLink>
                        </li>
                        <li className="nav-item p-2">
                        <NavLink className="nav-link text-light" to="/contacto">Contacto</NavLink>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
