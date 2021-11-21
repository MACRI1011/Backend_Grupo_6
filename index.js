
const usuario = require("./Sprint 2/Usuario/index.js");
const proyecto = require("./Sprint 2/Proyecto/index.js")


const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://erickAdmi:Salem14@gestionproyectos.hw0ed.mongodb.net/";
const client = new MongoClient(url);
const dbName = "Gestion-Proyectos";



usuario.conexionUsuario()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());


proyecto.conexionProyecto()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());  






