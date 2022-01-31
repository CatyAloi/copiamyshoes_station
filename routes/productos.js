
let express = require('express');  
const path = require('path');
const productosController = require('../controllers/productosController');
let router = express.Router();

router.get('/', productosController.index);
router.get('/:idProducto', productosController.detalle);
router.get('/carrito', productosController.carrito);
router.get('/crear', productosController.crear);



module.exports = router;