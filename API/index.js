const express = require('express');
const mongoose= require('mongoose');
const routes= require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const loadJsonFile = require('./presupuestos.json');

//crear el servidor
const app= express();

app.use(cors());

//conectar a mongodb
/*mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/presupuestos', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}); */

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Agus:<goma>@cluster1.cziov.azure.mongodb.net/<presupuestos>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("presupuestos").collection("presupuesto");
  // perform actions on the collection object
  client.close();
});




//habilitar el bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//habilitar routing
app.use('/', routes());




//puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando')
})