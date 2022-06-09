import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Listado } from './listado'
import { Formulario } from './formulario'
import { Carrito } from './carrito'

export function Barra() {
    return (
        <Fragment>
            <Router>
                <ul className="topnav">
                    <li><Link to="/">Listado</Link></li>
                    <li><Link to="/crear">Crear</Link></li>
                    <li><Link to="/carrito">Carrito</Link></li>
                </ul>
                <Routes>
                    <Route exact path="/" element={<Listado />} />
                    <Route exact path="/crear" element={<Formulario />} />
                    <Route exact path="/carrito" element={<Carrito />} />
                </Routes>
            </Router>
        </Fragment>
    )
}