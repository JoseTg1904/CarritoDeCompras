import React from "react";

import { Articulo } from './articulo';

export class Listado extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            articulos: []
        }
    }

    async componentDidMount() {
        let response
        await fetch('http://localhost:3500/articulos', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(json => response = json)
        this.setState({
            articulos: response
        })
        console.log(this.state.articulos)
    }

    render() {
        let articulos = this.state.articulos
        return (
            <div id = "listado">
            { articulos.map(articulo => (
                <Articulo 
                    articulo={articulo}
                />
            ))}
            </div>
        )
    }
}