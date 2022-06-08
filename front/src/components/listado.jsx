import { useEffect, useState } from "react";

import { Articulo } from './articulo';

export function Listado() {
    const [articulos, setArticulos] = useState([])
    const [articulos2, setArticulos2] = useState([])
    const [busqueda, setBusqueda] = useState("")
    const [filtroPrecio, setFiltroPrecio] = useState("")

    useEffect(() => {
        getArticles()
        setFiltroPrecio("menor")
    }, [])

    const getArticles = async() => {
        await fetch('http://localhost:3500/articulos', {
            method: 'GET',
        })
        .then(response => response.json())
        .then(json => {
            json.sort(function(a, b){ return a.precio - b.precio })
            setArticulos(json)
            setArticulos2(json)
        })
    }

    const handleChange = (e) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const handleChangeFiltroPrecio = (e) => {
        setFiltroPrecio(e.target.value)
        filtrarPrecio()
    }

    const filtrar = (value) => {
        let result = articulos2.filter((articulo) => {
            if (articulo['nombre'].toLowerCase().includes(value.toLowerCase())) {
                return articulo
            }
        })
        
        setArticulos(result)
    }

    const filtrarPrecio = () => {     
        let result = articulos
        if (filtroPrecio === "menor") {
            result.sort(function(a, b){ return b.precio - a.precio })
        } else {
            result.sort(function(a, b){ return a.precio - b.precio })
        }   
        setArticulos(result)
    }
    
    return (
        <div id = "listado">
            <select onChange={handleChangeFiltroPrecio} value={filtroPrecio}>
                <option value="mayor">Mayor precio</option>
                <option value="menor">Menor precio</option>
            </select>
            <label>Busqueda: 
                <input 
                    value={busqueda}
                    type="text" onChange={handleChange} 
                />
            </label>
            { articulos && articulos.map((articulo) => (
                <Articulo key={articulo.articulo} articulo={articulo}/>
            ))}
        </div>
    )
}