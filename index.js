const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const Mongoose = require('mongoose');
const app = express();
const compression = require('compression');
const cors = require('cors');
const session = require('express-session');
const apiUsers = require('./api/users');
const apiDeportes = require('./api/deportes');

app.use(bodyParser.urlencoded({ extended: true }))

Mongoose.createConnection('mongodb://localhost:27017/better', { config: { autoIndex: false } });

app.use(cors());
app.use(compression());
app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false
  }));
app.use('/', express.static("./src/main/webapp/"));

app.use(apiUsers);
app.use(apiDeportes);

app.get('/admin/*', function (req, res) {
    res.sendFile(__dirname + '/src/main/webapp/resources/views/admin/index.html');
});

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/src/main/webapp/resources/views/front/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});



app.listen(3000, () => {
    console.log('listening on 3000')
})