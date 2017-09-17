const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const Mongoose = require('mongoose');
const app = express();
const Deporte = require('./schemas/deporte.js');

let myDeport = new Deporte({
    nombre: "Futbol",
    descripcion: "el deporte mas popular del mundo"
})

app.use(bodyParser.urlencoded({ extended: true }))

Mongoose.createConnection('mongodb://localhost:27017/better', { config: { autoIndex: false } });



app.use('/', express.static("./src/main/webapp/"));

app.get('*', function(req, res) {
    res.sendfile('./src/main/webapp/resources/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

app.listen(3000, () => {
    console.log('listening on 3000')
    console.log(myDeport);
})