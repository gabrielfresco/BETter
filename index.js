const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', function (req, res) {
    res.send('Hello World!');
  });

MongoClient.connect('mongodb://localhost:27017/better', (err, database) => {
    if (err) return console.log(err)
    db = database
    app.listen(3000, () => {
      console.log('listening on 3000')
    })
  })