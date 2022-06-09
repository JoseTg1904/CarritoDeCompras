const db = require('../helpers/database.helper')
const sql = require('mssql')

async function obtenerArticulos(req, res) {
    const pool = await db.getConnection()
    const result = await pool.request().query("select * from dbo.Articulos")
    res.json(result.recordset)
}

async function crearArticulo(req, res) {
    const pool = await db.getConnection()
    articulo = req.body

    const request = await pool.request()
    request.input('nombre', sql.VarChar, articulo.nombre)
    request.input('descripcion', sql.Text, articulo.descripcion)
    request.input('precio', sql.Float, articulo.precio)
    request.input('unidades', sql.Int, articulo.unidades)
    request.input('foto', sql.VarChar, articulo.foto)
    request.query(
        `insert into dbo.Articulos (nombre, descripcion, precio, unidades, foto)
         values (@nombre, @descripcion, @precio, @unidades, @foto)`)
    res.json(request)
}

exports.obtenerArticulos = obtenerArticulos
exports.crearArticulo = crearArticulo