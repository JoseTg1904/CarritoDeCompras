var { Router } = require("express");
var contactosController = require('../controllers/contactos.controller');

const router = Router();

router.get('/contactos', contactosController.obtenerContactos);
router.post('/contacto/crear', contactosController.crearContacto)

module.exports = router