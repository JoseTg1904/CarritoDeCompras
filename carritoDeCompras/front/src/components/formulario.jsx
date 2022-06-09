import React from "react";

export class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
            precio: 0,
            unidades: 0,
            foto: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        let { name, value } = event.target;

        this.setState({ 
            ...this.state,
            [name]: value 
        })
    }

    async handleSubmit(event) {
        await fetch('http://localhost:3500/articulo/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        event.preventDefault();
    }
    
    render () {
        const { nombre, descripcion, precio, unidades, foto } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Nombre: 
                        <input value={nombre} type="text" name="nombre" onChange={this.handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Descripcion: 
                        <textarea value={descripcion} name="descripcion" onChange={this.handleChange} required></textarea>
                    </label>
                </div>
                <div>
                    <label>Precio:
                        <input value={precio} type="number" name="precio" onChange={this.handleChange} required />
                    </label>                
                </div>
                <div>
                    <label>Unidades: 
                        <input value={unidades} type="number" name="unidades" onChange={this.handleChange} required />
                    </label>
                </div>
                <div>
                    <label>Foto: 
                        <input value={foto} type="text" name="foto" onChange={this.handleChange} required />
                    </label> 
                </div>
                <div>
                    <input type="submit" value="Crear" />
                </div>
            </form>
        )
    }
}