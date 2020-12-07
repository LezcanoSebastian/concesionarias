const fs = require('fs');
let leerJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
let listaDeAutos = []
let listaAuto = leerJSON.forEach(lista => {
    listaDeAutos.push(lista.autos);
})

module.exports = {
    catalogoDeAutos: (req, res) => {
        res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
        res.write(`Total de autos: ${listaDeAutos.length} \n\n`);
        listaDeAutos.forEach(list => {
            res.write(`- Marca: ${list[0].marca} \n Modelo: ${list[0].modelo} \n- Año: ${list[0].anio} \n- Color: ${list[0].color} \n\n\n`);
        });
        res.end();
    },
    autosMarca: (req, res) =>{
        let marca = req.params.marca
        let listaAutos = [];
        let marcas = [];
        let autosMarca = [];
        leerJSON.filter(element=>{
            listaAutos.push(element.autos)
          });
          for(let i = 0; i < listaAutos.length; i++){
            for(let j = 0; j < listaAutos[i].length; j++){
                marcas.push(listaAutos[i][j].marca);
                if (listaAutos[i][j].marca == marca){
                    autosMarca.push(listaAutos[i][j])/* sacado de internet, repasar. se itero dentro del array de objetos, y a su vez se itero dentro de cada objeto*/
                }
            }
        }
        if(!marcas.includes(marca)){
            res.send("Marca no disponible");
        }
        else{
            res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8"});
            res.write(`CATALOGO DE LA MARCA: ${marca.toUpperCase()} \n\n`)
            autosMarca.forEach(element => {
                res.write(`Marca : ${element.marca.toUpperCase()}\n\nModelo: ${element.modelo}\n\nAño: ${element.anio}\n\nColor: ${element.color}`)
            });
            res.end()
        }
    }
}
    /* Frustracion nivel dios, falta terminar mensaje para jona por si lo ve :) */

/* console.log(listaDeAutos) */