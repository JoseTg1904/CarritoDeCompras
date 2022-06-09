import React from "react";

import { actualizarCantidad } from '../helpers/carrito';

export class Articulo extends React.Component {
    constructor(props) {
        super(props)
        let {articulo, cantidad} = this.props.articulo
        this.state = {
            articulo: articulo,
            cantidad: cantidad,
            subtotal: articulo.precio * cantidad,
            eliminar: this.props.eliminar,
            actualizarTotal: this.props.actualizarTotal
        }

        this.modificarCantidad = this.modificarCantidad.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.eliminar = this.eliminar.bind(this)
    }

    eliminar = (articulo) => {
        this.state.eliminar(articulo)
        this.state.actualizarTotal()
    }

    modificarCantidad = (cantidad, articulo) => {
        this.setState({
            cantidad: this.state.cantidad + cantidad,
            subtotal: (this.state.cantidad + cantidad) * this.state.articulo.precio
        })
        actualizarCantidad(cantidad, articulo, "suma")
        this.state.actualizarTotal()
    }

    handleChange = (event) => {
        let value = event.target.value
        this.setState({cantidad: value, subtotal: value * this.state.articulo.precio})
        actualizarCantidad(parseInt(value), this.state.articulo.articulo, "cambio")
        this.state.actualizarTotal()

    }

    render() {
        let { articulo } = this.state

        const styles = {
            card: {
                "borderStyle": "solid"
            },
            img: {
                "width": "25%"
            },
            container: {
                "padding": "2px 16px"
            }
        }

        return (            
            <div style={styles.card}>
                <button onClick={() => this.eliminar(articulo.articulo)}>X</button>
                <br />
                <img 
                    src={articulo.foto} 
                    alt="foto"
                    style={styles.img}
                />
                <div style={styles.container}>
                    <h3><b>{articulo.nombre}</b></h3>
                    <p>Precio unitario: Q {articulo.precio}</p>
                    <p>Subtotal: Q {this.state.subtotal}</p>
                    <button onClick={() => this.modificarCantidad(-1, articulo.articulo) }>-</button>
                    <input value={this.state.cantidad} onChange={this.handleChange} />
                    <button onClick={() => this.modificarCantidad(1, articulo.articulo)}>+</button>
                </div>
            </div>
        )
    }
}