const express = require('express');
const router = express.Router();
const marcasController = require('../controllers/marcasController');
router.get('/', marcasController.marcas);
router.get('/:marca', marcasController.marcasFiltrada)
module.exports=router;