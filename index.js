const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const Mongoose = require('mongoose');
const app = express();
const Deporte = require('./schemas/deporte.js');

let myDeport = new Deporte({
    nombre: "Futbol",
    descripcion: "el deporte mas popular del mundo"
})

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

Mongoose.createConnection('mongodb://localhost:27017/better', { config: { autoIndex: false } });

  app.listen(3000, () => {
    console.log('listening on 3000')
    console.log(myDeport);
  })