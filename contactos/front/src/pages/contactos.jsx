import { Component, Fragment } from 'react'

import { contactosService } from '../services/contactos.service';
import './contactos.css'

export class Contactos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contactos: [],
            contactos2: [],
            nombresOrden: true,
            apellidosOrden: true,
            tipoContacto: 'todos',
            tipoTelefono: 'todos'
        }

        this.obtenerDatos = this.obtenerDatos.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.filtrar = this.filtrar.bind(this)
        this.ordenarPorCabecera = this.ordenarPorCabecera.bind(this)
        this.handleChangeAgrupar = this.handleChangeAgrupar.bind(this)

        this.contactosService = new contactosService();
    }

    async obtenerDatos() {
        let response = await this.contactosService.obtenerContactos()
        let data = await response.json()
        this.setState({
            contactos: data,
            contactos2: data
        })
    }

    ordenarPorCabecera(cabecera, ordenamiento) {
        let result = this.state.contactos
        let valorOrdenamiento = this.state[ordenamiento] 

        if (valorOrdenamiento) { result.sort((a, b) => { return b[cabecera].localeCompare(a[cabecera]) }) } 
        else { result.sort((a, b) => { return a[cabecera].localeCompare(b[cabecera]) }) }
    
        this.setState({
            contactos: result,
            [ordenamiento]: !valorOrdenamiento
        })
    }

    handleChange(event) {
        let { value } = event.target
        this.filtrar(value)
    }

    filtrar(value) {
        let result = this.state.contactos2.filter((contacto) => {
            let contactoEncontrado = null

            if (contacto.nombres.toLowerCase().includes(value.toLowerCase()) ||
            contacto.apellidos.toLowerCase().includes(value.toLowerCase())) {
                contactoEncontrado = contacto
            }

            return contactoEncontrado == null ? false : contactoEncontrado
        })
        
        this.setState({
            contactos: result
        })
    }

    handleChangeAgrupar(event, complemento) {
        let { value, name } = event.target
        this.setState({
            [name]: value
        })
        this.agrupar(value, name, complemento)
    }

    agrupar(value, name, complemento) {
        let result = this.state.contactos2.filter((contacto) => {
            let contactoEncontrado = null

            if (value === "todos" && this.state[complemento] === "todos") { contactoEncontrado = contacto }
            else {
                if (contacto[name] === value && this.state[complemento] === "todos" ) { contactoEncontrado = contacto }  
                else if (value === "todos" && contacto[complemento] === this.state[complemento]) { contactoEncontrado = contacto}
                else if (contacto[name] === value && contacto[complemento] === this.state[complemento]) { contactoEncontrado = contacto }
            }

            return contactoEncontrado == null ? false : contactoEncontrado
        })
        
        this.setState({
            contactos: result
        })
    }

    componentDidMount() { this.obtenerDatos() }

    render() {
        return (
            <Fragment>
                <label>
                    Buscar: 
                    <input onChange={this.handleChange}></input>
                </label>
                <div>
                    <label>Tipo de telefono: 
                        <select 
                            name="tipoTelefono"
                            onChange={(event) => this.handleChangeAgrupar(event, "tipoContacto")}>
                            <option value={"todos"}>Todos</option>
                            <option value={"celular"}>Celular</option>
                            <option value={"casa"}>Casa</option>
                            <option value={"oficina"}>Oficina</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Tipo de contacto: 
                        <select 
                            name = "tipoContacto" 
                            onChange={(event) => this.handleChangeAgrupar(event, "tipoTelefono")}>
                            <option value={"todos"}>Todos</option>
                            <option value={"familia"}>Familia</option>
                            <option value={"trabajo"}>Trabajo</option>
                            <option value={"amigo"}>Amigo</option>
                        </select>
                    </label>
                </div>
                <br /><br />
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => this.ordenarPorCabecera("nombres", "nombresOrden")}>Nombres</th>
                            <th onClick={() => this.ordenarPorCabecera("apellidos", "apellidosOrden")}>Apellidos</th>
                            <th>No. Telefono</th>
                            <th>Tipo de telefono</th>
                            <th>Tipo de contacto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.contactos.map((contacto) => (
                            <tr key={contacto.contacto}>
                                <td>{contacto.nombres}</td>
                                <td>{contacto.apellidos}</td>
                                <td>{contacto.telefono}</td>
                                <td>{contacto.tipoTelefono}</td>
                                <td>{contacto.tipoContacto}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        )
    }
}