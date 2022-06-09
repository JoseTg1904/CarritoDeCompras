export class contactosService {
    constructor() {
        this.url = "http://localhost:3500"
    }

    obtenerContactos() {
        return fetch(`${this.url}/contactos`)
    }

    crearContacto(contacto) {
        return fetch(`${this.url}/contacto/crear`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contacto)
        })
    }
}