const db = require('../helpers/database.helper')
const sql = require('mssql')

async function obtenerContactos(req, res) {
    const pool = await db.getConnection()
    const result = await pool.request().query("select * from dbo.Contactos order by nombres")
    res.json(result.recordset)
}

async function crearContacto(req, res) {
    const pool = await db.getConnection()
    contacto = req.body
    
    const request = await pool.request()
    request.input('nombres', sql.VarChar, contacto.nombres)
    request.input('apellidos', sql.VarChar, contacto.apellidos)
    request.input('telefono', sql.VarChar, contacto.telefono)
    request.input('tipoTelefono', sql.VarChar, contacto.tipoTelefono)
    request.input('tipoContacto', sql.VarChar, contacto.tipoContacto)
    request.query(
        `insert into dbo.Contactos (nombres, apellidos, telefono, tipoTelefono, tipoContacto)
            values (@nombres, @apellidos, @telefono, @tipoTelefono, @tipoContacto)`)
    console.log(request)
            res.json({estado: 'creado'})
}

exports.crearContacto = crearContacto
exports.obtenerContactos = obtenerContactos