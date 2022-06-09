import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import { Contactos } from '../pages/contactos'
import { Formulario } from '../pages/formulario'

export function Barra() {
    return (
        <Router>
            <ul>
                <li><Link to="/">Listado</Link></li>
                <li><Link to="/crear">Crear</Link></li>
            </ul>
            <Routes>
                <Route exact path="/" element={<Contactos />} />
                <Route exact path='/crear' element={<Formulario />} />
            </Routes>
        </Router>
    )
}
/*
                   
                    <Route exact path="/crear" element={<Formulario />} />
                    <Route exact path="/carrito" element={<Carrito />} />
*/