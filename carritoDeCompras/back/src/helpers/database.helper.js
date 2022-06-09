const sql = require('mssql')

const config = {
    user: process.env.USER || "sa",
    password: process.env.PASSWORD || "12345",
    server: process.env.SERVER || "192.168.1.24",
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