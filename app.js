const express = require('express');
const fs = require('fs');
const app = express();
app.listen(3030, () => console.log('Server running in 3030 port'));

let casa = require('./routes/home')
app.use('/', casa);

let sucursal = require('./routes/sucursales')
app.use('/sucursales', sucursal);

let marca = require('./routes/marcas') 
app.use('/marcas', marca)


let autos=require('./routes/autos')
app.use('/autos', autos)