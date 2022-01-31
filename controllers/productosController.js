
const path = require('path');

const controlador = {
    index : (req, res) => {
        {res.sendFile(path.resolve(__dirname,'../views/catalogo_producto.html')); };
    },
    
    detalle : (req, res) => {
          {res.sendFile(path.resolve(__dirname,'../views/detalle_producto.html')); };
    },

    carrito : (req, res) => {
        {res.sendFile(path.resolve(__dirname,'../views/carrito.html')); };
},

    crear : (req, res) => {
        {res.sendFile(path.resolve(__dirname,'../views/detalle_producto.html')); };
    },

    
};

module.exports = controlador;