import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Listado } from './listado'
import { Formulario } from './formulario'

export function Barra() {
    return (
        <Fragment>
            <Router>
                <ul>
                    <li><Link to="/">Listado</Link></li>
                    <li><Link to="/crear">Crear</Link></li>
                </ul>
                <Routes>
                    <Route exact path="/" element={<Listado />} />
                    <Route exact path="/crear" element={<Formulario />} />
                </Routes>
            </Router>
        </Fragment>
    )
}