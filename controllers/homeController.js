const { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } = require('constants');
const fs = require('fs');
let leerJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
module.exports={
    home: (req,res)=>{
       var sucur=leerJSON.map(function(sucursales){
           return sucursales.sucursal + '<br>'
       })
       let sucur2=sucur.join(" ")
           res.send(`Bienvenidos a nuestro sitio, estas son nuestras sucursales: <br>${sucur2}`)
    
           
       }
        
       
}