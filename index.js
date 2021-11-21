const usuario = require("./Sprint 2/Usuario/index.js")

const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://erickAdmi:Salem14@gestionproyectos.hw0ed.mongodb.net/";
const client = new MongoClient(url);
const dbName = "Gestion-Proyectos";



usuario.conexionUsuario()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());





