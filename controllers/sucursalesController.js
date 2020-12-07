const fs = require('fs');
const { format } = require('path');
let leerJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
module.exports={
    info: (req,res)=>{
       var sucur=leerJSON.map(function(sucursales){
           return ('Sucursal:'+ sucursales.sucursal + '<br>' + 'Direccion: ' + sucursales.direccion +'<br>'+ 'Telefono' + sucursales.telefono +'<br>')
       })
       let sucur2=sucur.join(" ")
           res.send(` ♠ SUCURSALES <br>${sucur2}`)
    
           
       },

       sucursalVariada: (req, res)=>{
        let sucursal2 = leerJSON.filter(sucursal2=>{
            return sucursal2.sucursal.toUpperCase()
            == req.params.sucursal.toUpperCase()
            
        });
        
        if (sucursal2[0]==undefined){
            res.send('Error, sucursal no encontrada')
        }else{
            res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"})
            res.write(`Sucursal: ${sucursal2[0].sucursal.toUpperCase()}\nDireccion: ${sucursal2[0].direccion}\nTelefono: ${sucursal2[0].telefono}\n♠ Modelos disponibles: \n\n`);
           sucursal2[0].autos.forEach(element => {
              res.write(`Marca: ${element.marca}\nModelo: ${element.modelo}\nAño: ${element.anio}\nColor: ${element.color}\n\n`)
            });
            res.end()
        }
    
       } 
       
}