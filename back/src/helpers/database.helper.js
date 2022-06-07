const sql = require('mssql')

const config = {
    user: "sa",
    password: "12345",
    server: "localhost",
    database: "articulosReact",
    options: {
        trustServerCertificate: true
    }
}

async function getConnection() {
    try {
        return await sql.connect(config)
    } catch (error) {
        console.error(error)
    }
}

exports.getConnection = getConnection