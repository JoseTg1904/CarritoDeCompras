import {Component} from 'react'

import { contactosService } from '../services/contactos.service'

export class Formulario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nombres: '',
            apellidos: '',
            telefono: '',
            tipoTelefono: 'celular',
            tipoContacto: 'familia'
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.contactosService = new contactosService();
    }

    handleChange(event) {
        let { name, value } = event.target;

        this.setState({ 
            [name]: value 
        })
    }

    async handleSubmit(event) {
        await this.contactosService.crearContacto(this.state)

        this.setState({
            nombres: '',
            apellidos: '',
            telefono: '',
            tipoTelefono: 'celular',
            tipoContacto: 'familia'
        })
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nombres: 
                        <input type="text" name="nombres" onChange={this.handleChange} required/>
                    </label>
                    </div>
                <div>
                    <label>Apellidos:
                        <input type="text" name="apellidos" onChange={this.handleChange} required/>
                    </label>
                </div>
                <div>
                    <label>Telefono:
                        <input type="text" name="telefono" onChange={this.handleChange} required/>
                    </label>
                </div>
                <div>
                    <label>Tipo de telefono: 
                        <select name="tipoTelefono" onChange={this.handleChange}>
                            <option value={"celular"}>Celular</option>
                            <option value={"casa"}>Casa</option>
                            <option value={"oficina"}>Oficina</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>Tipo de contacto: 
                        <select name="tipoContacto" onChange={this.handleChange}>
                            <option value={"familia"}>Familia</option>
                            <option value={"trabajo"}>Trabajo</option>
                            <option value={"amigo"}>Amigo</option>
                        </select>
                    </label>
                </div>
                <div>
                    <input type="submit" value="Crear" />
                </div>
            </form>
        )
    }
}