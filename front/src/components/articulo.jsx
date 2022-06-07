import React from "react";

export class Articulo extends React.Component {
    render() {
        const { articulo } = this.props
        const styles = {
            card: {
                "border-style": "solid"
            },
            img: {
                "width": "25%"
            }
        }
        
        return (
            <div 
                key={articulo.articulo} 
                id="card"
                style={styles.card}
            >
                <img 
                    src={articulo.foto} 
                    alt="foto"
                    style={styles.img}
                />
                <div id="container">
                    <h3><b>{articulo.nombre}</b></h3>
                    <h4>{articulo.descripcion}</h4>
                    <p>Q {articulo.precio}</p>
                </div>
            </div>
        )
    }
}