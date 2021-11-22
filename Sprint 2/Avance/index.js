const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://erickAdmi:Salem14@gestionproyectos.hw0ed.mongodb.net/";
const client = new MongoClient(url);
const dbName = "Gestion-Proyectos";

async function conexionAvance() {
  await client.connect();
  console.log("Conexión ONLINE establecida correctamente");

  const db = client.db(dbName);
  const collection = db.collection("Avances");

  const insertDocument = await collection.insertOne({
        proyecto_id: "2",
        usuario_id:"3",
        estado: "inciado",
        fechaAvance:"hoy",
        observaciones: "no hay buen avance"

  });
  console.log("Documento insertado => ", insertDocument);

  // const insertDocuments = await collection.insertMany({});
  // console.log("Documento insertado => ", insertDocuments);

  // const findDocuments = await collection.find().toArray();
  // console.log("Documentos encontrados => ", findDocuments);

  // const findDocument = await collection.find({});
  // console.log("Documento encontrado => ", findDocument);

  // const updateDocument = await collection.updateOne({},{$set:{}});
  // console.log("Documento actualizado => ", updateDocument);

  // const findDocuments2 = await collection.find().toArray();
  // console.log("Documentos encontrados => ", findDocuments2)

  // const updateDocuments = await collection.updateMany({},{$set:{}});
  // console.log("Documentos actualizados => ", updateDocuments);

  // const findDocuments2 = await collection.find().toArray();
  // console.log("Documentos encontrados => ", findDocuments2)

  // const deletePropertyDoc = await collection.updateOne({},{$unset:{"":""}});
  // console.log("Documento actualizado => ", deletePropertyDoc);

  // const deleteDoc = await collection.deleteOne({});
  // console.log("Documento eliminado => ", deleteDoc);

  // const deleteDocs = await collection.deleteMany({});
  // console.log("Documentos eliminados => ", deleteDocs);
}

module.exports ={
  "conexionAvance": conexionAvance

}