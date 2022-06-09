var { Router } = require("express");
var articulosController = require('../controllers/articulos.controller');

const router = Router();

router.get('/articulos', articulosController.obtenerArticulos);
router.post('/articulo/crear', articulosController.crearArticulo)

module.exports = router