import React from "react";

export class Articulo extends React.Component {
    render() {
        const { articulo } = this.props
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
                <img 
                    src={articulo.foto} 
                    alt="foto"
                    style={styles.img}
                />
                <div style={styles.container}>
                    <h3><b>{articulo.nombre}</b></h3>
                    <h4>{articulo.descripcion}</h4>
                    <p>Q {articulo.precio}</p>
                </div>
            </div>
        )
    }
}