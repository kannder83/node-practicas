//Se solicita el modulo de file system:
//const fs = require("fs");

/* Sirve para crear un documento y se puede agregar el texto indicado.

fs.writeFile("./nuevo.txt", "Hola mundo", function (err) {
  if (err) {
    console.log("Hubo un error ");
  } else {
    console.log("Se creo correctamente.");
  }
});
*/

/* Se utiliza para leer un archivo y mostrar el texto:
fs.readFile("./nuevo.txt", function (err, data) {
  if (err) {
    console.log("Ocurrió un error");
  }
  console.log(data.toString());
});
*/

/*
const operaciones = require("./operaciones");
const objeto = require("./objetos");

console.log(operaciones.sumar(2, 5));

console.log(objeto);
console.log(objeto.getNombre());
*/

// Ejercicio #3
// Se puede crear un servidor HTML:

const http = require("http");

/*
http
  .createServer(function (req, res) {
    //console.log("Carga el servidor en http://localhost:3000");
    res.write("Servidor de NodeJS.");
    res.end();
  })
  .listen(3000);
  */

//Se puede optimizar el código del ejercicio 3 y dejarlo como:
/*
const handleServer = function (req, res) {
  res.write("Servidor de NodeJS #2.");
  res.end();
};

const server = http.createServer(handleServer);
server.listen(3000, function () {
  console.log("Server Running...");
});
*/
//Ejercicio #4 - Crear eventos:

const EventEmitter = require("events");
const emiter = new EventEmitter();

emiter.on("miEvento", function (args) {
  console.log("Escuchando evento ", args);
});

emiter.emit("miEvento", {
  id: 1,
  mensaje: "Hola",
});
