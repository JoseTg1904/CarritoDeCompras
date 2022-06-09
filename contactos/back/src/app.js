const express = require("express");
const cors = require("cors");

const app = express();

// settings
app.set("port", 3500);

// Middlewares
app.use(cors());
app.use(express.json())

// Routes
app.use(require('./routes/contactos.route'));
//app.use(require('./routes/paises.routes'));

module.exports = app;