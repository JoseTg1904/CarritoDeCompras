export let carrito = []
let total = 0

export const agregarCarrito = (articulo) => {
    let bandera = false

    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].articulo.articulo === articulo.articulo) {
            carrito[i].cantidad++
            bandera = !bandera
        } 
    }

    if (!bandera) { 
        let item = { articulo: articulo, cantidad: 1 }
        carrito.push(item)
    }
    calcularTotal()
}

export const verCarrito = () => {
    console.log(carrito)
}

export const retornarCarrito = () => {
    return carrito
}

export const actualizarCantidad = (cantidad, articulo, tipo) => {
    for (let i = 0; i < carrito.length; i++) {
        if (carrito[i].articulo.articulo === articulo) {
            if (tipo === "suma") { carrito[i].cantidad = carrito[i].cantidad + cantidad }
            else { carrito[i].cantidad = cantidad }
            break
        }
    }
    calcularTotal()
}

export const removerDelCarrito = (articulo) => {
    for (let i = 0; i < carrito.length; i++) {
        if(carrito[i].articulo.articulo === articulo) {
            carrito.splice(i, 1)
            break
        }
    }
    calcularTotal()
}

export const calcularTotal = () => {
    total = 0
    for (let i = 0; i < carrito.length; i++ ) {
        total += carrito[i].articulo.precio * carrito[i].cantidad
    }
}

export const retornarTotal = () => {
    return total
}
