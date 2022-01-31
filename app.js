const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.resolve (__dirname, './public');
app.use(express.static(publicPath));

let rutasProductos = require('./routes/productos');
let rutasMain = require('./routes/main');

app.use('/productos', rutasProductos);
app.use ('/', rutasMain);

app.listen(3000, () => console.log('Servidor Shoes_Station corriendo'));