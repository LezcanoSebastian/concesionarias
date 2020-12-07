const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController');
router.get('/', autosController.catalogoDeAutos);
router.get('/:marca', autosController.autosMarca);
/* router.get('/:marca/:dato', autosController.buscarPorDato); */
module.exports=router;