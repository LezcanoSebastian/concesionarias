const fs = require('fs');
const { format } = require('path');
let leerJSON = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));
let listaDeAutos = []
let listaAutos = leerJSON.forEach(lista => {
        listaDeAutos.push(lista.autos);
    })
    let listaMarcas= listaDeAutos.map(lista=>{
        return lista[0].marca
    })
    const unicos = [];

for(var i = 0; i < listaMarcas.length; i++) {
 
  const elemento = listaMarcas[i];
 
  if (!unicos.includes(listaMarcas[i])) {/* metodo buscado en internet, profundizar */
    unicos.push(elemento);
  }
}
module.exports = {
    marcas: (req, res) => {
        res.write(`- Marcas disponibles:\n`);
            res.write(`${unicos.join(' \n').toLocaleUpperCase()} `);
            res.end();
       

    },
    marcasFiltrada: (req, res)=>{
     let marca = req.params.marca;
    
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
          res.write("CATALOGO POR MARCA: \n\n")
          autosMarca.forEach(element => {
              res.write(`Marca : ${element.marca}\n\nModelo: ${element.modelo}\n\nAño: ${element.anio}\n\n`)
          });
          res.end()
      }}
}
/* console.log(listaDeAutos
  ) */
/* console.log(listaMarcas)
console.log(unicos) */
