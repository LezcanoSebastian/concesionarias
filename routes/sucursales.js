const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursalesController');
router.get('/', sucursalController.info);
router.get('/:sucursal',sucursalController.sucursalVariada)
module.exports=router;