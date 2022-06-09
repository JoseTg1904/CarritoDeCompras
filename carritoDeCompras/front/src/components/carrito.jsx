import { Fragment, Component } from 'react'

import { retornarCarrito, removerDelCarrito, retornarTotal } from '../helpers/carrito';
import { Articulo } from './articuloCarrito'

export class Carrito extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articulos: retornarCarrito(),
            total: retornarTotal()
        }

        this.eliminar = this.eliminar.bind(this)
    }

    eliminar = (articulo) => {
        removerDelCarrito(articulo)
        this.setState({articulos: retornarCarrito(), total: retornarTotal()})
    }

    actualizarTotal = () => {
        this.setState({total: retornarTotal()})
    }

    render( ){
    return (
        <Fragment>
            <h4>Q {this.state.total}</h4>
            { this.state.articulos && this.state.articulos.map((articulo) => (
                <Articulo 
                    key={articulo.articulo.articulo} 
                    articulo={articulo} 
                    eliminar={this.eliminar} 
                    actualizarTotal={this.actualizarTotal}
                />
            ))}
        </Fragment>
    )}
}